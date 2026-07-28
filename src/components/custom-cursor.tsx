// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.

"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    // Expand ring on interactive elements
    const expandTargets = "a, button, [role=button], .cursor-hover";
    const onEnter = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.opacity = "0.5";
    };
    const onLeave = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "1";
    };

    const addListeners = () => {
      document.querySelectorAll(expandTargets).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    // Re-attach on DOM mutations (route changes)
    const observer = new MutationObserver(() => addListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot!.style.left = `${mx}px`;
      dot!.style.top = `${my}px`;
      ring!.style.left = `${rx}px`;
      ring!.style.top = `${ry}px`;
    }
    animate();

    // Enable custom cursor styling
    document.body.classList.add("custom-cursor-active");

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          background: "#00f5ff",
          boxShadow: "0 0 20px rgba(0,245,255,0.4)",
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          border: "1px solid rgba(0,245,255,0.5)",
          transition:
            "transform 0.15s ease, width 0.3s, height 0.3s, opacity 0.3s",
        }}
      />
    </>
  );
}

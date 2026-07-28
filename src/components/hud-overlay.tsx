// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.

"use client";

import { useEffect, useState } from "react";

export function HudOverlay() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const t = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setTime(`${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const base =
    "fixed z-10 font-mono text-[0.55rem] tracking-[2px] pointer-events-none text-cyan-500/25 hidden md:block";

  return (
    <>
      <div className={`${base} top-20 left-5`}>
        SYS::ONLINE
        <br />
        NODE_ID::0x4D4C
        <br />
        LAT::57.70°N
      </div>
      <div className={`${base} top-20 right-5 text-right`}>
        {time}
        <br />
        SIGNAL::STRONG
        <br />
        ENC::AES-256
      </div>
      <div className={`${base} bottom-16 left-5`}>
        FRAME::OK
        <br />
        GPU::ACTIVE
      </div>
      <div className={`${base} bottom-16 right-5 text-right`}>
        NET::SECURE
        <br />
        STATUS::READY
      </div>
    </>
  );
}

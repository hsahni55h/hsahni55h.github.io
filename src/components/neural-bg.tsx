// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

const NODE_COUNT = 80;
const MAX_DIST = 18;
const DUST_COUNT = 250;
const DUST_COUNT_SMALL = 90;
const SPARK_COUNT = 7;
const SPARK_COUNT_SMALL = 4;
const SPARK_SPEED = 5; // world units per second: calm, readable travel
const LAYERS = [5, 8, 8, 3]; // home "input → hidden → hidden → output" formation
const CURSOR_RADIUS = 160; // px
const RIPPLE_SPEED = 420; // px per second
const RIPPLE_LIFE = 1.4; // seconds
const FORM_FIRST_DELAY = 5;
const FORM_HOLD = 4.5;
const FORM_IDLE = 11;

const CYAN = new THREE.Color(0x00f5ff);
const VIOLET = new THREE.Color(0xa78bfa);
const SPARK = new THREE.Color(0xe6fdff);

const pointsVertex = /* glsl */ `
  attribute vec3 color;
  attribute float size;
  attribute float alpha;
  attribute float bright;
  attribute float phase;
  uniform float uTime;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float pulse = phase < 0.0 ? 0.0 : sin(uTime * 0.9 + phase);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.5, size * (1.0 + 0.22 * pulse + 0.8 * bright) * uScale / -mv.z);
    gl_Position = projectionMatrix * mv;
    vColor = mix(color, vec3(0.92, 0.99, 1.0), clamp(bright * 0.6, 0.0, 0.6));
    vAlpha = alpha * (phase < 0.0 ? 1.0 : 0.72 + 0.28 * pulse) * (1.0 + 0.9 * bright);
  }
`;

const pointsFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float halo = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.2, 0.05, d);
    gl_FragColor = vec4(vColor, clamp((halo * halo * 0.55 + core) * vAlpha, 0.0, 1.0) * uOpacity);
  }
`;

interface Edge {
  a: number;
  b: number;
  base: number; // alpha in the free-floating cloud
  layer: number; // alpha in the layered formation
}

interface Spark {
  edge: number;
  from: number;
  to: number;
  p: number;
  layered: boolean;
}

const smooth = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isHomeRef = useRef(pathname === "/");

  useEffect(() => {
    isHomeRef.current = pathname === "/";
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Phones/tablets: fewer points and a lower pixel ratio to save GPU and battery
    const isSmall = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const dustCount = isSmall ? DUST_COUNT_SMALL : DUST_COUNT;
    const sparkCount = isSmall ? SPARK_COUNT_SMALL : SPARK_COUNT;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const pixelRatio = Math.min(window.devicePixelRatio, isSmall ? 1.5 : 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);
    const net = new THREE.Group();
    scene.add(net);

    // ── Nodes: free-cloud positions and layered-formation targets ──
    const base: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      base.push(
        new THREE.Vector3((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 40)
      );
    }
    // The nodes closest to the centre take part in the formation (short, calm travel)
    const participants = base
      .map((p, i) => ({ i, d: p.length() }))
      .sort((x, y) => x.d - y.d)
      .slice(0, LAYERS.reduce((s, n) => s + n, 0))
      .map((o) => o.i);
    const layerOf = new Int8Array(NODE_COUNT).fill(-1);
    const layerSlot = new Int8Array(NODE_COUNT);
    {
      const byX = [...participants].sort((a, b) => base[a].x - base[b].x);
      let k = 0;
      LAYERS.forEach((n, l) => {
        byX
          .slice(k, k + n)
          .sort((a, b) => base[b].y - base[a].y)
          .forEach((idx, s) => {
            layerOf[idx] = l;
            layerSlot[idx] = s;
          });
        k += n;
      });
    }
    const target = base.map((p) => p.clone());
    // Fit the formation to the viewport; portrait screens flow top → bottom
    const layoutFormation = () => {
      const visH = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const visW = visH * camera.aspect;
      const portrait = camera.aspect < 1;
      const flowVis = portrait ? visH : visW;
      const crossVis = portrait ? visW : visH;
      const span = Math.min(34, flowVis * 0.58);
      const gap = Math.min(4.6, (crossVis * 0.72) / (Math.max(...LAYERS) - 1));
      // Desktop: centre on the content column beside the 224px sidebar
      const shift = window.innerWidth >= 768 ? (112 / window.innerWidth) * visW : 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const l = layerOf[i];
        if (l < 0) {
          target[i].copy(base[i]).multiplyScalar(1.35);
          continue;
        }
        const flow = -span / 2 + (span * l) / (LAYERS.length - 1);
        const cross = (layerSlot[i] - (LAYERS[l] - 1) / 2) * gap;
        if (portrait) target[i].set(-cross, -flow, 0);
        else target[i].set(flow + shift, cross, 0);
        if (portrait) target[i].x += shift;
      }
    };
    layoutFormation();

    // ── Edges: proximity edges plus forward layer-to-layer edges, one LineSegments ──
    const edges: Edge[] = [];
    const edgeKey = new Map<string, number>();
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = base[i].distanceTo(base[j]);
        if (d < MAX_DIST) {
          edgeKey.set(`${i}-${j}`, edges.length);
          edges.push({ a: i, b: j, base: Math.pow(1 - d / MAX_DIST, 2) * 0.4, layer: 0 });
        }
      }
    }
    for (const i of participants) {
      for (const j of participants) {
        if (layerOf[j] !== layerOf[i] + 1) continue;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        const existing = edgeKey.get(key);
        if (existing !== undefined) {
          const e = edges[existing];
          // Keep the forward direction so sparks flow input → output
          edges[existing] = { a: i, b: j, base: e.base, layer: 0.09 };
        } else {
          edgeKey.set(key, edges.length);
          edges.push({ a: i, b: j, base: 0, layer: 0.09 });
        }
      }
    }
    const cloudAdj: { e: number; to: number }[][] = base.map(() => []);
    const layerAdj: { e: number; to: number }[][] = base.map(() => []);
    edges.forEach((e, idx) => {
      if (e.base > 0) {
        cloudAdj[e.a].push({ e: idx, to: e.b });
        cloudAdj[e.b].push({ e: idx, to: e.a });
      }
      if (e.layer > 0) layerAdj[e.a].push({ e: idx, to: e.b });
    });
    const cloudEdges = edges.map((e, i) => (e.base > 0.06 ? i : -1)).filter((i) => i >= 0);
    const inputEdges = edges.map((e, i) => (e.layer > 0 && layerOf[e.a] === 0 ? i : -1)).filter((i) => i >= 0);

    const edgePos = new Float32Array(edges.length * 6);
    const edgeCol = new Float32Array(edges.length * 8);
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgePos, 3).setUsage(THREE.DynamicDrawUsage));
    edgeGeo.setAttribute("color", new THREE.BufferAttribute(edgeCol, 4).setUsage(THREE.DynamicDrawUsage));
    const edgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    edgeLines.frustumCulled = false;
    net.add(edgeLines);

    // ── Points: nodes, then sparks, then dust, in one draw call ──
    const sparkStart = NODE_COUNT;
    const dustStart = NODE_COUNT + sparkCount;
    const total = dustStart + dustCount;
    const pPos = new Float32Array(total * 3);
    const pCol = new Float32Array(total * 3);
    const pSize = new Float32Array(total);
    const pAlpha = new Float32Array(total);
    const pBright = new Float32Array(total);
    const pPhase = new Float32Array(total).fill(-1);
    for (let i = 0; i < NODE_COUNT; i++) {
      (i % 4 === 0 ? VIOLET : CYAN).toArray(pCol, i * 3);
      pSize[i] = 0.7;
      pAlpha[i] = 0.75;
      pPhase[i] = Math.random() * Math.PI * 2;
    }
    for (let s = 0; s < sparkCount; s++) {
      SPARK.toArray(pCol, (sparkStart + s) * 3);
      pSize[sparkStart + s] = 0.55;
    }
    for (let d = 0; d < dustCount; d++) {
      const i = dustStart + d;
      for (let k = 0; k < 3; k++) pPos[i * 3 + k] = (Math.random() - 0.5) * 120;
      (d % 6 === 0 ? VIOLET : CYAN).toArray(pCol, i * 3);
      pSize[i] = 0.22;
      pAlpha[i] = 0.3;
    }
    const pointGeo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(pPos, 3).setUsage(THREE.DynamicDrawUsage);
    const alphaAttr = new THREE.BufferAttribute(pAlpha, 1).setUsage(THREE.DynamicDrawUsage);
    const brightAttr = new THREE.BufferAttribute(pBright, 1).setUsage(THREE.DynamicDrawUsage);
    pointGeo.setAttribute("position", posAttr);
    pointGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    pointGeo.setAttribute("size", new THREE.BufferAttribute(pSize, 1));
    pointGeo.setAttribute("alpha", alphaAttr);
    pointGeo.setAttribute("bright", brightAttr);
    pointGeo.setAttribute("phase", new THREE.BufferAttribute(pPhase, 1));
    const uniforms = {
      uTime: { value: 0 },
      uScale: { value: 1 },
      uOpacity: { value: 1 },
    };
    const pointMat = new THREE.ShaderMaterial({
      vertexShader: pointsVertex,
      fragmentShader: pointsFragment,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    points.frustumCulled = false;
    net.add(points);

    const updateScale = () => {
      uniforms.uScale.value =
        (window.innerHeight * pixelRatio) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    };
    updateScale();

    // ── Live state ──
    const cur = base.map((p) => p.clone());
    const disp = base.map(() => new THREE.Vector3());
    const glow = new Float32Array(NODE_COUNT);
    const flash = new Float32Array(NODE_COUNT);
    const sparks: Spark[] = [];
    const pickEdge = (list: number[]) => list[Math.floor(Math.random() * list.length)];
    const spawnSpark = (layered: boolean): Spark => {
      const pool = layered && inputEdges.length ? inputEdges : cloudEdges;
      const e = pickEdge(pool);
      const flip = !layered && Math.random() < 0.5;
      return { edge: e, from: flip ? edges[e].b : edges[e].a, to: flip ? edges[e].a : edges[e].b, p: Math.random() * 0.6, layered };
    };
    for (let s = 0; s < sparkCount; s++) sparks.push(spawnSpark(false));

    let form = 0;
    let formVel = 0;
    let formTarget = 0;
    let formClock = 0;
    let formPhase: "idle" | "on" = "idle";
    let formWait = FORM_FIRST_DELAY;

    let mouseX = 0;
    let mouseY = 0;
    let mouseIn = false;
    let parX = 0;
    let parY = 0;
    const ripples: { x: number; y: number; age: number }[] = [];
    let scrollP = 0;
    let scrollEase = 0;
    let dimEase = 1;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseIn = true;
    };
    const onMouseLeave = () => {
      mouseIn = false;
    };
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      ripples.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (ripples.length > 3) ripples.shift();
    };
    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollP = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("scroll", readScroll, { passive: true });
    readScroll();

    const tmp = new THREE.Vector3();
    const closest = new THREE.Vector3();
    const ndc = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const invNet = new THREE.Matrix4();
    const timer = new THREE.Clock();
    let time = 0;

    function step(dt: number, still: boolean) {
      time += dt;
      uniforms.uTime.value = time;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Home formation schedule; leaving home relaxes it
      if (!still && isHomeRef.current) {
        formClock += dt;
        if (formPhase === "idle" && formClock > formWait) {
          layoutFormation();
          formPhase = "on";
          formClock = 0;
          formTarget = 1;
        } else if (formPhase === "on" && formClock > FORM_HOLD + 2.2) {
          formPhase = "idle";
          formClock = 0;
          formWait = FORM_IDLE;
          formTarget = 0;
        }
      } else if (formPhase === "on" || formTarget) {
        formPhase = "idle";
        formClock = 0;
        formWait = FORM_IDLE;
        formTarget = 0;
      }
      // Critically damped spring: eases in and out, survives interruptions
      const k = 2.6;
      formVel += ((formTarget - form) * k - 2 * Math.sqrt(k) * formVel) * dt;
      form = Math.min(1, Math.max(0, form + formVel * dt));
      const free = 1 - form;

      // Scroll: slow drift forward through the network, and dim behind dense content
      scrollEase += (scrollP - scrollEase) * Math.min(1, dt * 3);
      const dimTarget = 1 - 0.5 * smooth(0.2 * h, 1.0 * h, window.scrollY);
      dimEase += (dimTarget - dimEase) * Math.min(1, dt * 3);
      uniforms.uOpacity.value = dimEase;
      edgeMat.opacity = dimEase;

      net.rotation.y = (Math.sin(time * 0.06) * 0.55 + scrollEase * 0.6) * free;
      net.rotation.x = (Math.sin(time * 0.045) * 0.18 + scrollEase * 0.15) * free;
      if (mouseIn) {
        parX += ((mouseX / w - 0.5) * 3 - parX) * 0.03;
        parY += ((mouseY / h - 0.5) * 3 - parY) * 0.03;
      }
      camera.position.set(parX * free, -parY * free, 30 - scrollEase * 9 * free);
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();
      net.updateMatrixWorld();

      // Cursor ray in network space, for gentle attraction
      let ray: THREE.Ray | null = null;
      if (mouseIn && !still) {
        ndc.set((mouseX / w) * 2 - 1, -(mouseY / h) * 2 + 1);
        raycaster.setFromCamera(ndc, camera);
        invNet.copy(net.matrixWorld).invert();
        ray = raycaster.ray.clone().applyMatrix4(invNet);
      }
      for (const r of ripples) r.age += dt;
      while (ripples.length && ripples[0].age > RIPPLE_LIFE) ripples.shift();

      for (let i = 0; i < NODE_COUNT; i++) {
        cur[i].lerpVectors(base[i], target[i], form);
        tmp.copy(cur[i]).add(disp[i]).applyMatrix4(net.matrixWorld).project(camera);
        const sx = (tmp.x * 0.5 + 0.5) * w;
        const sy = (-tmp.y * 0.5 + 0.5) * h;
        let g = 0;
        if (ray) {
          const d = Math.hypot(sx - mouseX, sy - mouseY);
          g = 1 - smooth(0, CURSOR_RADIUS, d);
        }
        for (const r of ripples) {
          const d = Math.hypot(sx - r.x, sy - r.y);
          const band = Math.exp(-(((d - r.age * RIPPLE_SPEED) / 55) ** 2));
          g = Math.max(g, band * (1 - r.age / RIPPLE_LIFE));
        }
        glow[i] += (g - glow[i]) * Math.min(1, dt * 8);
        flash[i] = Math.max(0, flash[i] - dt * 1.6);

        if (ray && glow[i] > 0.01) {
          ray.closestPointToPoint(cur[i], closest);
          closest.sub(cur[i]).multiplyScalar(0.22 * glow[i]);
          if (closest.length() > 1.6) closest.setLength(1.6);
        } else closest.set(0, 0, 0);
        disp[i].lerp(closest, Math.min(1, dt * 4));
        cur[i].add(disp[i]);

        cur[i].toArray(pPos, i * 3);
        pBright[i] = Math.max(glow[i], flash[i]);
        pAlpha[i] = layerOf[i] < 0 ? 0.75 * (1 - 0.65 * form) : 0.75;
      }

      for (let e = 0; e < edges.length; e++) {
        const { a, b } = edges[e];
        cur[a].toArray(edgePos, e * 6);
        cur[b].toArray(edgePos, e * 6 + 3);
        const lit = Math.max(pBright[a], pBright[b]);
        const alpha = (edges[e].base * free + edges[e].layer * form) * (1 + 2.2 * lit);
        const c = lit * 0.5;
        for (let v = 0; v < 2; v++) {
          const o = e * 8 + v * 4;
          edgeCol[o] = c;
          edgeCol[o + 1] = 0.96 + 0.04 * c;
          edgeCol[o + 2] = 1;
          edgeCol[o + 3] = Math.min(1, alpha);
        }
      }

      // Sparks travel node → node; in the formation they flow input → output
      const layeredMode = form > 0.5;
      sparks.forEach((s, idx) => {
        const i = sparkStart + idx;
        if (still) {
          pAlpha[i] = 0;
          return;
        }
        const len = Math.max(1, cur[s.from].distanceTo(cur[s.to]));
        s.p += (dt * SPARK_SPEED) / len;
        if (s.p >= 1) {
          flash[s.to] = Math.max(flash[s.to], 0.7);
          const next = (layeredMode ? layerAdj : cloudAdj)[s.to].filter((n) => n.to !== s.from);
          if (s.layered === layeredMode && next.length) {
            const n = next[Math.floor(Math.random() * next.length)];
            sparks[idx] = { edge: n.e, from: s.to, to: n.to, p: 0, layered: layeredMode };
          } else {
            sparks[idx] = { ...spawnSpark(layeredMode), p: 0 };
          }
          s = sparks[idx];
        }
        tmp.lerpVectors(cur[s.from], cur[s.to], s.p);
        tmp.toArray(pPos, i * 3);
        const e = edges[s.edge];
        const vis = s.layered ? (e.layer > 0 ? form : 0) : e.base > 0 ? free : 0;
        pAlpha[i] = Math.sin(Math.PI * s.p) * 0.95 * vis;
      });

      posAttr.needsUpdate = true;
      alphaAttr.needsUpdate = true;
      brightAttr.needsUpdate = true;
      edgeGeo.attributes.position.needsUpdate = true;
      edgeGeo.attributes.color.needsUpdate = true;
      renderer.render(scene, camera);
    }

    let animId: number | null = null;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      step(Math.min(timer.getDelta(), 0.05), false);
    };
    const start = () => {
      if (animId !== null) return;
      timer.getDelta();
      loop();
    };
    const stop = () => {
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
    };
    // Static frame for reduced motion; pause the loop while the tab is hidden
    const renderStill = () => {
      form = 0;
      formVel = 0;
      formTarget = 0;
      step(0, true);
    };
    const sync = () => {
      if (reducedMotion.matches || document.hidden) {
        stop();
        if (reducedMotion.matches) renderStill();
      } else {
        start();
      }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateScale();
      if (formPhase === "idle") layoutFormation();
      if (animId === null && reducedMotion.matches) renderStill();
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      document.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", readScroll);
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
      window.removeEventListener("resize", onResize);
      edgeGeo.dispose();
      edgeMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
      {/* Soft edge vignette keeps the network calm around the content */}
      <div
        aria-hidden
        className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(2,9,22,0.55)_100%)]"
      />
    </>
  );
}

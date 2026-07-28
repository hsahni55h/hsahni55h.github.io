// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 80;
const MAX_DIST = 18;
const PARTICLE_COUNT = 250;

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    // ── Node positions ──────────────────────────────────
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40
        )
      );
    }

    // ── Node spheres ────────────────────────────────────
    const nodeGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const nodes: THREE.Mesh[] = [];
    nodePositions.forEach((pos, i) => {
      const color =
        i % 5 === 0 ? 0x00ff88 : i % 3 === 0 ? 0x7b2fff : 0x00f5ff;
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.copy(pos);
      scene.add(mesh);
      nodes.push(mesh);
    });

    // ── Edges ───────────────────────────────────────────
    const edgesGroup = new THREE.Group();
    scene.add(edgesGroup);
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < MAX_DIST) {
          const opacity = Math.pow(1 - d / MAX_DIST, 2) * 0.4;
          const geo = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const mat = new THREE.LineBasicMaterial({
            color: 0x00f5ff,
            transparent: true,
            opacity,
          });
          edgesGroup.add(new THREE.Line(geo, mat));
        }
      }
    }

    // ── Particles ───────────────────────────────────────
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      partPos[i] = (Math.random() - 0.5) * 120;
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.15,
      transparent: true,
      opacity: 0.3,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // ── Mouse parallax ──────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouseMove);

    // ── Animation loop ──────────────────────────────────
    const clocks = nodes.map(() => Math.random() * Math.PI * 2);
    let animId: number;

    function render() {
      animId = requestAnimationFrame(render);

      scene.rotation.y += 0.0008;
      scene.rotation.x += 0.0003;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      nodes.forEach((node, i) => {
        clocks[i] += 0.015;
        const s = 1 + Math.sin(clocks[i]) * 0.25;
        node.scale.setScalar(s);
        (node.material as THREE.MeshBasicMaterial).opacity =
          0.5 + Math.sin(clocks[i]) * 0.3;
      });

      particles.rotation.y += 0.0004;
      renderer.render(scene, camera);
    }
    render();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}

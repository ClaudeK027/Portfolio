"use client";

import { useEffect, useState } from "react";
import TSParticles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <TSParticles
      id="hero-particles"
      className="absolute inset-0 pointer-events-none"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true } },
          color: { value: ["#0080FF", "#00D4FF", "#4DA6FF"] },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: { enable: true, speed: 0.8, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0080FF",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.3 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

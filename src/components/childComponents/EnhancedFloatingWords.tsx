import React, { useCallback, useRef, useEffect } from "react";
import { useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  RecursivePartial,
  ISourceOptions,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import { WORDS, BRIGHT_COLORS } from "../../data/particlesData";

export default function EnhancedFloatingWords() {
  const [init, setInit] = useState(false);

  const [responsiveSize, setResponsiveSize] = useState({ min: 14, max: 28 });
  const containerRef = useRef<Container | null>(null);

  const updateParticleSize = useCallback(() => {
    const width = window.innerWidth;
    let newMin, newMax;

    if (width < 640) {
      // Mobile (< sm)
      newMin = 8;
      newMax = 8;
    } else if (width < 1024) {
      // Tablet (sm - lg)
      newMin = 10;
      newMax = 10;
    } else {
      // Desktop (> lg)
      newMin = 14;
      newMax = 28;
    }
    // Update state only if values are different to prevent unnecessary re-renders
    setResponsiveSize((prev) =>
      prev.min !== newMin || prev.max !== newMax
        ? { min: newMin, max: newMax }
        : prev
    );
  }, []);
  useEffect(() => {
    updateParticleSize(); // Set initial size
    window.addEventListener("resize", updateParticleSize);
    return () => window.removeEventListener("resize", updateParticleSize);
  }, [updateParticleSize]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback((container?: Container) => {
    containerRef.current = container ?? null;
  }, []);

  // Animate particle speed & size slightly for dynamic effect
  useEffect(() => {
    let raf: number;
    let t = 0;
    const baseSpeed = 0.2;
    const baseMin = responsiveSize.min;
    const baseMax = responsiveSize.max;
    const sizeRange = baseMax - baseMin;
    const sizeOffset = baseMin;

    const cycle = () => {
      t += 0.02;
      const amp =
        (Math.sin(t * 1.5) * 0.5 + 0.5) * 0.8 +
        (Math.sin(t * 3.7) * 0.5 + 0.5) * 0.2;

      const c = containerRef.current;
      if (c) {
        try {
          (c.options as any).particles.move.speed = baseSpeed + amp * 2.5;

          const minSize = sizeOffset + sizeRange * amp * 0.2;
          const maxSize = baseMax + sizeRange * amp * 0.4;

          (c.options as any).particles.size.value = {
            min: minSize,
            max: maxSize,
          };
          if (c.canvas?.element) {
            const glowLevel = 0.6 + amp * 0.9;
            c.canvas.element.style.setProperty("--neon-glow", `${glowLevel}`);
          }
          if (Math.floor(t * 10) % 5 === 0) {
            c.refresh();
          }
        } catch {}
      }

      raf = requestAnimationFrame(cycle);
    };

    raf = requestAnimationFrame(cycle);
    return () => cancelAnimationFrame(raf);
  }, [responsiveSize]);

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    fontFamily: "'Orbitron', sans-serif",
    backgroundColor: "#111827",
  };

  const options: RecursivePartial<ISourceOptions> = {
    fullScreen: { enable: false },
    background: { color: { value: "rgba(0,0,0,0)" } },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: WORDS.length * 2, density: { enable: false } },
      shape: {
        type: "char",
        options: {
          char: WORDS.map((word) => ({
            value: word,
            font: "Orbitron, sans-serif",
            weight: "20",
            fill: true,
          })),
        },
      },
      color: { value: BRIGHT_COLORS },
      size: {
        value: { min: responsiveSize.min, max: responsiveSize.max },
        animation: {
          enable: true,
          speed: 0.2,
          minimum: responsiveSize.min * 0.8,
          sync: false,
        } as any,
      },
      opacity: {
        value: { min: 0.4, max: 1 },
        animation: {
          enable: true,
          speed: 0.1,
          minimum: 0.3,
          sync: false,
        } as any,
      },
      rotate: {
        value: { min: -15, max: 15 },
        animation: { enable: true, speed: 2, sync: false },
        direction: "right",
      },
      move: {
        enable: true,
        speed: 5,
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      life: {
        duration: { value: 8, sync: false },
        count: 0,
        delay: { random: { enable: true, minimumValue: 0 }, value: 0 },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "bubble" },
        resize: { enable: true, delay: 0 },
      },
      modes: {
        repulse: { distance: 80, duration: 0.1 },
        bubble: {
          distance: 20,
          duration: 0.8,
          size: 40,
          opacity: 1,
          color: { value: BRIGHT_COLORS },
        },
      },
    },
  };

  return (
    <div style={wrapperStyle}>
      <Particles
        init={initParticlesEngine}
        loaded={particlesLoaded}
        options={options}
        {...({} as any)}
      />
    </div>
  );
}

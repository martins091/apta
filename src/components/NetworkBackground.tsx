import { useEffect, useRef } from "react";

type BokehOrb = {
  x: number; y: number; vx: number; vy: number;
  radius: number; opacity: number; pulse: number; pulseSpeed: number;
  r: number; g: number; b: number;
};

type StarNode = {
  x: number; y: number; vx: number; vy: number;
  radius: number; pulse: number; pulseSpeed: number;
  color: "gold" | "teal" | "white" | "rose";
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Richer bokeh palette — warm and layered
    const BOKEH_COLORS = [
      { r: 140, g: 20,  b: 50  },  // deep rose
      { r: 92,  g: 14,  b: 35  },  // burgundy
      { r: 26,  g: 100, b: 138 },  // steel teal
      { r: 232, g: 140, b: 30  },  // amber
      { r: 60,  g: 0,   b: 90  },  // purple
      { r: 10,  g: 60,  b: 100 },  // navy
      { r: 180, g: 60,  b: 20  },  // burnt orange
      { r: 20,  g: 80,  b: 70  },  // dark teal
    ];

    const bokeh: BokehOrb[] = Array.from({ length: 22 }, () => {
      const c = BOKEH_COLORS[Math.floor(Math.random() * BOKEH_COLORS.length)];
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        radius: 50 + Math.random() * 180,
        opacity: 0.08 + Math.random() * 0.18,
        pulse: Math.random() * Math.PI * 2, pulseSpeed: 0.004 + Math.random() * 0.005,
        r: c.r, g: c.g, b: c.b,
      };
    });

    // Aurora band — sweeping horizontal glow
    let auroraOffset = 0;

    const palette = {
      gold:  { r: 232, g: 184, b: 75  },
      teal:  { r: 92,  g: 198, b: 215 },
      white: { r: 255, g: 245, b: 230 },
      rose:  { r: 255, g: 140, b: 140 },
    } as const;

    const numNodes = Math.floor((W * H) / 6500);
    const nodes: StarNode[] = Array.from({ length: numNodes }, () => {
      const roll = Math.random();
      const color: StarNode["color"] = roll < 0.5 ? "gold" : roll < 0.78 ? "teal" : roll < 0.92 ? "rose" : "white";
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.5,
        pulse: Math.random() * Math.PI * 2, pulseSpeed: 0.007 + Math.random() * 0.012,
        color,
      };
    });

    const mouse = { x: W / 2, y: H / 2, active: false };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const onLeave = () => { mouse.active = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf: number;
    const MAX_DIST = 160;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      // Aurora sweep — horizontal band across top-left
      auroraOffset += 0.003;
      const ay = H * 0.35 + Math.sin(auroraOffset) * H * 0.1;
      const auroraGrad = ctx.createLinearGradient(0, ay - 200, 0, ay + 200);
      auroraGrad.addColorStop(0, "rgba(26,100,138,0)");
      auroraGrad.addColorStop(0.3, `rgba(26,100,138,${0.06 + 0.03 * Math.sin(auroraOffset * 0.7)})`);
      auroraGrad.addColorStop(0.5, `rgba(92,14,35,${0.05 + 0.03 * Math.sin(auroraOffset * 1.1)})`);
      auroraGrad.addColorStop(0.7, "rgba(232,140,30,0.03)");
      auroraGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = auroraGrad;
      ctx.fillRect(0, ay - 200, W * 0.75, 400);

      // Draw bokeh
      bokeh.forEach((o) => {
        o.x += o.vx; o.y += o.vy;
        o.pulse += o.pulseSpeed;
        if (o.x < -250) o.x = W + 250; if (o.x > W + 250) o.x = -250;
        if (o.y < -250) o.y = H + 250; if (o.y > H + 250) o.y = -250;
        const pulsed = o.opacity * (0.8 + 0.2 * Math.sin(o.pulse));
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.radius);
        grad.addColorStop(0, `rgba(${o.r},${o.g},${o.b},${pulsed})`);
        grad.addColorStop(0.4, `rgba(${o.r},${o.g},${o.b},${pulsed * 0.5})`);
        grad.addColorStop(1, `rgba(${o.r},${o.g},${o.b},0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Update nodes
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (mouse.active) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 220) { const f = (1 - d / 220) * 0.06; n.vx += (dx / d) * f; n.vy += (dy / d) * f; }
        }
        n.vx *= 0.986; n.vy *= 0.986;
        if (Math.abs(n.vx) < 0.05) n.vx += (Math.random() - 0.5) * 0.06;
        if (Math.abs(n.vy) < 0.05) n.vy += (Math.random() - 0.5) * 0.06;
        if (n.x < -40) n.x = W + 40; if (n.x > W + 40) n.x = -40;
        if (n.y < -40) n.y = H + 40; if (n.y > H + 40) n.y = -40;
      });

      // Connections
      ctx.lineWidth = 0.55;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const op = (1 - d / MAX_DIST) * 0.55;
            const ca = palette[a.color], cb = palette[b.color];
            const r = (ca.r + cb.r) >> 1, g = (ca.g + cb.g) >> 1, bb = (ca.b + cb.b) >> 1;
            ctx.strokeStyle = `rgba(${r},${g},${bb},${op})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const c = palette[n.color];
        const pulse = (Math.sin(n.pulse) + 1) / 2;
        const r = n.radius + pulse * 0.9;
        ctx.shadowBlur = 16;
        ctx.shadowColor = `rgba(${c.r},${c.g},${c.b},0.95)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.85 + pulse * 0.15})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

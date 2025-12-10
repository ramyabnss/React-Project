import { useEffect } from "react";

export default function HeroParticles({ id = "hero-canvas" }) {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = id;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";

    const container = document.querySelector(".hero-section");
    if (!container) return;
    container.prepend(canvas);
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#00eaff", "#ff00e6", "#ae00ff", "#39ff14"];
    const sparks = [];

    /** THREE-LAYER PARALLAX **/
    const layers = [
      { speed: 0.15, sizeMin: 1, sizeMax: 2.2, countFactor: 0.8 },  // BACK
      { speed: 0.35, sizeMin: 1.4, sizeMax: 3.5, countFactor: 1.0 }, // MID
      { speed: 0.70, sizeMin: 2, sizeMax: 4.5, countFactor: 0.6 }   // FRONT
    ];

    let particles = [];

    const makeParticles = () => {
      particles = [];

      layers.forEach((layer, index) => {
        const count = Math.floor(
          ((canvas.width * canvas.height) / 28000) * layer.countFactor
        );

        for (let i = 0; i < count; i++) {
          particles.push({
            layer: index,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r:
              Math.random() * (layer.sizeMax - layer.sizeMin) +
              layer.sizeMin,
            c: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * layer.speed,
            vy: (Math.random() - 0.5) * layer.speed,
            explodePower: 0
          });
        }
      });
    };

    makeParticles();

    let mouse = { x: null, y: null };

    /*******************************
     * ⚡ EXPLOSION + ELECTRIC SPARK
     *******************************/
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          const force = (90 - dist) / 90;
          const angle = Math.atan2(dy, dx);

          p.vx += Math.cos(angle) * force * 1.2;
          p.vy += Math.sin(angle) * force * 1.2;

          p.explodePower = 1;

          if (Math.random() < 0.3) {
            sparks.push({
              x1: mouse.x,
              y1: mouse.y,
              x2: p.x,
              y2: p.y,
              alpha: 1,
              color: p.c
            });
          }
        }
      });
    };

    window.addEventListener("mousemove", onMove);

    /*******************************
     * 🎨 DRAW LOOP
     *******************************/
    let raf = null;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /** ⚡ DRAW SPARKS */
      sparks.forEach((s, i) => {
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1 + Math.random() * 1.2;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 15;
        ctx.shadowColor = s.color;

        const midX = (s.x1 + s.x2) / 2 + (Math.random() - 0.5) * 20;
        const midY = (s.y1 + s.y2) / 2 + (Math.random() - 0.5) * 20;

        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(midX, midY);
        ctx.lineTo(s.x2, s.y2);

        ctx.stroke();
        s.alpha -= 0.06;
        if (s.alpha <= 0) sparks.splice(i, 1);
      });

      /** 🌌 DRAW PARALLAX PARTICLES */
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.c;

        ctx.shadowBlur = p.layer === 2 ? 30 : p.layer === 1 ? 15 : 7;
        ctx.shadowColor = p.c;
        ctx.globalAlpha = p.explodePower ? 1 : 0.8;

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        p.explodePower *= 0.9;
        p.vx *= 0.97;
        p.vy *= 0.97;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [id]);

  return null;
}



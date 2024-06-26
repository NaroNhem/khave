'use client';
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from 'next-themes';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  lightColors,
  darkColors,
  waveWidth,
  backgroundFillLight,
  backgroundFillDark,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  lightColors?: string[];
  darkColors?: string[];
  waveWidth?: number;
  backgroundFillLight?: string;
  backgroundFillDark?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const { theme } = useTheme();
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas?.getContext("2d") ?? null;
    if (ctx) {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      nt = 0;
      window.onresize = function () {
        w = ctx!.canvas.width = window.innerWidth;
        h = ctx!.canvas.height = window.innerHeight;
        ctx!.filter = `blur(${blur}px)`;
      };
      render();
    }
  };

  const waveColors = theme === 'light' ? (lightColors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]) 
                                       : (darkColors ?? ["#1e3a8a", "#4338ca", "#6d28d9", "#7e22ce", "#0891b2"]);

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx!.beginPath();
      ctx!.lineWidth = waveWidth || 50;
      ctx!.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx!.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx!.stroke();
      ctx!.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx!.fillStyle = theme === 'light' ? (backgroundFillLight || "white") : (backgroundFillDark || "black");
    ctx!.globalAlpha = waveOpacity || 0.5;
    ctx!.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme]); // Re-run the effect when theme changes

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but I have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative h-[85vh] w-full flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-[-1] w-full h-full pointer-events-none"
        ref={canvasRef}
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};




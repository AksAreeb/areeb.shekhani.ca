"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

const LOCATIONS = [
  { city: "Kingston", label: "Queen's", tz: "America/Toronto", lat: 44.2312, lon: -76.486 },
  { city: "Oakville", label: "Home", tz: "America/Toronto", lat: 43.4675, lon: -79.6877 },
];

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

interface WeatherData {
  temp: number;
}

export function DualClock() {
  const mounted = useMounted();
  const [time, setTime] = useState<Date | null>(null);
  const [weather, setWeather] = useState<Record<string, WeatherData>>({});

  useEffect(() => {
    if (!mounted) return;
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const fetchWeather = async () => {
      try {
        const results = await Promise.all(
          LOCATIONS.map(async (loc) => {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m`
            );
            const data = await res.json();
            return {
              key: loc.city,
              temp: Math.round(data?.current?.temperature_2m ?? 0),
            };
          })
        );
        setWeather(
          Object.fromEntries(results.map((r) => [r.key, { temp: r.temp }]))
        );
      } catch {
        // Silent fallback - show time only
      }
    };
    fetchWeather();
    const id = setInterval(fetchWeather, 300000);
    return () => clearInterval(id);
  }, [mounted]);

  if (!mounted || !time) {
    return (
      <div className="flex flex-col gap-6">
        <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
          Oakville / Kingston Bridge
        </span>
        <div className="grid grid-cols-2 gap-4">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 animate-pulse"
            >
              <p className="text-xs text-white/40">{loc.city}</p>
              <p className="text-2xl font-mono text-white/20 mt-2">--:--:--</p>
              <p className="text-xs text-white/20 mt-1">Loading...</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
        Oakville / Kingston Bridge
      </span>
      <div className="grid grid-cols-2 gap-4">
        {LOCATIONS.map((loc) => (
          <motion.div
            key={loc.city}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-electric/30 hover:shadow-[0_0_16px_rgba(0,229,255,0.06)] transition-all duration-300"
          >
            <p className="text-xs text-cyan-electric/70 font-mono">
              {loc.city}
              <span className="text-white/30 ml-1">({loc.label})</span>
            </p>
            <p className="text-2xl md:text-3xl font-mono text-white mt-2 tabular-nums">
              {formatTime(
                new Date(time.toLocaleString("en-US", { timeZone: loc.tz }))
              )}
            </p>
            <p className="text-xs text-white/40 font-mono mt-1">
              {formatDate(
                new Date(time.toLocaleString("en-US", { timeZone: loc.tz }))
              )}
            </p>
            {weather[loc.city] && (
              <p className="text-xs text-cyan-electric/70 font-mono mt-1">
                {weather[loc.city].temp}°C
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

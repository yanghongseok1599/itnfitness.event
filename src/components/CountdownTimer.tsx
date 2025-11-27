"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventEndDate = new Date("2025-12-31T23:59:59");
      const now = new Date();
      const difference = eventEndDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "일", value: timeLeft.days },
    { label: "시간", value: timeLeft.hours },
    { label: "분", value: timeLeft.minutes },
    { label: "초", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-zinc-800 border border-green-500/30 rounded-lg p-2 md:p-4 min-w-[50px] md:min-w-[80px]">
            <motion.span
              key={unit.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xl md:text-4xl font-bold text-green-400 block text-center"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
          </div>
          <span className="text-xs md:text-sm text-zinc-400 mt-1">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

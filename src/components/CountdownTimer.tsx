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
    <div className="flex gap-2 sm:gap-3 md:gap-5 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center"
        >
          <motion.div
            whileHover={{
              borderColor: "rgba(201,169,110,0.6)",
              boxShadow: "0 0 25px rgba(201,169,110,0.15)",
              y: -2,
            }}
            className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.25)] rounded-xl p-2 sm:p-3 md:p-5 min-w-[44px] sm:min-w-[56px] md:min-w-[90px] transition-all"
          >
            <motion.span
              key={unit.value}
              initial={{ y: -15, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="font-display text-lg sm:text-2xl md:text-5xl font-semibold text-[#C9A96E] block text-center text-shadow-gold"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
          </motion.div>
          <span className="text-[10px] sm:text-xs md:text-sm text-[#A0A09A] mt-2 tracking-premium uppercase">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

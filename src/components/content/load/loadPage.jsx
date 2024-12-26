import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Preload() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const messages = [
    "Allo...",
    "Même dans...",
    "Le bruit...",
    "On vous écoute...",
    "Alokan...",
    "Bonjour!",
  ];

  function load() {
    setProgress((oldProgress) => {
      const newProgress = oldProgress + 20;

      if (newProgress <= 100) {
        const messageIndex = Math.floor(newProgress / 20);
        setMessage(messages[messageIndex] || messages[messages.length - 1]);
      }

      return newProgress >= 100 ? 100 : newProgress;
    });
  }

  useEffect(() => {
    const interval = setInterval(load, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full h-screen px-12">
      <div className="flex flex-col items-center justify-center h-full w-full relative">
        <div className="absolute bottom-1 right-8 w-full flex items-end justify-end gap-10">
          <p className="text-white text-[5rem] font-black ">{progress}%</p>

          <div className="w-full bg-gray-700 h-4 mb-4 rounded overflow-hidden">
            <motion.div
              className="bg-green-500 h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.6,
                ease: [0.68, -0.55, 0.27, 1.55], // "spring" easing for bounce
              }}
              style={{ originX: 0 }} // Animates from the left edge
            ></motion.div>
          </div>
        </div>
        <p className="text-white text-2xl mb-4 text-[5rem] uppercase font-black ">{message}</p>
      </div>
    </div>
  );
}

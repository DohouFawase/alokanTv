import { motion } from "motion/react";
import React from "react";
import { NavLink } from "react-router";

export default function HeroSection() {
  function slideIn() {
    return {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      },
    };
  }
  return (
    <div className="mt-[5rem] md:h-screen arriver flex flex-col justify-center ">
      <div className=" px-8 py-4">
        <div className="space-y-2 flex flex-col">
         
          <p className="w-1/2  text-black">
            <span className="text-3xl font-bold tracking-wide">Alokan</span> est une série télévisée africaine qui réunit des jeunes
            passionnés de cinéma. Grâce à leur créativité et leur humour unique,
            ils apportent joie et légèreté, offrant au public un moment
            d’évasion pour oublier les soucis du quotidien.
          </p>
          <p> Alokan : l’art qui  touche le cœur et apaise l’esprit. </p>
          <div className="mt-4">
            <NavLink
              className={
                "bg-blue-500 px-4 p-3 rounded-md text-white hover:bg-blue-700 transition-colors hover:translate-1.5 hover:skew-1 shadow-md"
              }
            >
              En savoir plus
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

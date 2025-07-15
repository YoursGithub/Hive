"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";


const HiveHomepage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 6,
    seconds: 6,
  });



  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float1 {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-15px) translateX(-10px) rotate(3deg);
        }
      }
      @keyframes float2 {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-12px) translateX(8px) rotate(-2deg);
        }
      }
      @keyframes float3 {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-18px) translateX(12px) rotate(4deg);
        }
      }
      @keyframes float4 {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) translateX(-8px) rotate(-3deg);
        }
      }
      .animate-float1 {
        animation: float1 3s ease-in-out infinite;
      }
      .animate-float2 {
        animation: float2 3.5s ease-in-out infinite;
      }
      .animate-float3 {
        animation: float3 2.8s ease-in-out infinite;
      }
      .animate-float4 {
        animation: float4 3.2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
      document.head.removeChild(style);
    };
  }, []);



  if (!mounted) return null;

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-red-300 rounded-full blur-2xl opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300 rounded-full blur-2xl opacity-25 animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-green-400 rounded-full animate-ping delay-500"></div>
      </div> */}

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="relative flex flex-col mt-[-220px] items-center justify-center">
          {/* Floating Images Section - Ready to be moved */}
          <div className="relative w-[200px] h-[80px] flex justify-between mb-2">
            <Image
              src="/assets/Frame 625292.png"
              alt="icon1"
              width={40}
              height={40}
              className="absolute left-0 animate-float1"
            />
            <Image
              src="/assets/Frame 625293.png"
              alt="icon2"
              width={40}
              height={40}
              className="absolute left-[45px] animate-float2 mt-[-20px]"
            />
            <Image
              src="/assets/Frame 625294.png"
              alt="icon3"
              width={40}
              height={40}
              className="absolute left-[95px] animate-float3 mt-[-20px]"
            />
            <Image
              src="/assets/Frame 625295.png"
              alt="icon4"
              width={40}
              height={40}
              className="absolute left-[140px] animate-float4"
            />
          </div>

          <Image src="/assets/Hive.png" width={180} height={180} alt="Hive Logo" className="mt-[-40px]" />
        </div>

        <div className="flex items-center space-x-4 mt-10">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <React.Fragment key={unit}>
              <div className="bg-white rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm bg-opacity-90 border border-yellow-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {timeLeft[unit as keyof typeof timeLeft]
                      .toString()
                      .padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {unit.charAt(0).toUpperCase() +
                      unit.slice(1).replace("s", "")}
                  </div>
                </div>
              </div>
              {index < 3 && (
                <div className="text-2xl text-gray-400 font-bold animate-pulse">
                  :
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 w-full z-10 bg-[#0A0A0A] text-white py-6">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-yellow-500">#</span>don&apos;t just order, have fun
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sfpro)' }}>
            Our Curated Baskets make your work easy and affordable, combining
            top talent and the right tools to speed up your projects.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HiveHomepage;
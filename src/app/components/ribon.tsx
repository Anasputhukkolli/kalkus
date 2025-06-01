"use client";
import React from 'react'

export default function ribon() {
  return (
    <div className="  flex items-center justify-center overflow-hidden">
      {/* Main Ribbon Container */}
      <div className="relative w-full h-32 overflow-hidden">
        {/* Continuous Ribbon */}
        <div className="absolute top-0 left-0 w-full h-full  flex items-center shadow-2xl overflow-hidden">
          <div className="flex animate-scroll-seamless whitespace-nowrap">
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
            <span className="text-white text-4xl font-bold pr-8">KALKUS </span>
          </div>
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-60%);
          }
        }



        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        .animate-scroll-seamless {
          animation: scroll-seamless 8s linear infinite;
        }



        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  )
}

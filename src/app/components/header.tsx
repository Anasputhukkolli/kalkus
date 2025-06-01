import React from 'react'
import Link from 'next/link'
export default function header() {
  return (
    <div>
      <div className="text-right pt-8 pr-8 relative z-10">
        <Link
          href="/"
          className="hover:opacity-80 transition-all duration-500 block group"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-wide text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-all duration-500 transform hover:scale-105 hover:rotate-1 drop-shadow-2xl">
            KALKUS
          </h1>
        </Link>
      </div>
    </div>
  )
}

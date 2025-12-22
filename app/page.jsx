import React from "react";

export default function Home() {
  return (
    <div className="home-background h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 
        Adjustment:
        - Added 'pt-20' (padding-top: 5rem) to push the text block down 
          from the perfect vertical center.
        - Kept 'pr-20 md:pr-32' for the left offset.
      */}
      <div className="flex flex-col items-start pr-20 md:pr-32 pt-40">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 shadow-black drop-shadow-lg">
          Raynell Lu Soon Hong
        </h1>

        <div className="text-2xl md:text-4xl font-semibold">
          <span className="typewriter gradient-text pb-1">
            Striving to be better
          </span>
        </div>

      </div>
    </div>
  );
}

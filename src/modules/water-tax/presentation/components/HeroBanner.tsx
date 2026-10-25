"use client";

import React from "react";

export interface HeroBannerProps {
  onCheckConnection?: () => void;
  onApplyConnection?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onCheckConnection,
  onApplyConnection,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#CFE0FC] bg-[#F4F9FF] shadow-xs"
      style={{
        backgroundImage: "url('/water-tap-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Soft gradient veil on left to ensure 100% text contrast across screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4F9FF] via-[#F4F9FF]/95 via-55% to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between min-h-[175px]">
        <div className="flex items-start gap-4 sm:gap-5">
          {/* White Circular Droplet Badge */}
          <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-xs border border-blue-100/60 mt-0.5">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#1A6CF0]"
            >
              {/* Vibrant blue droplet */}
              <path
                d="M16 4C16 4 7 15.5 7 21C7 25.9706 11.0294 30 16 30C20.9706 30 25 25.9706 25 21C25 15.5 16 4 16 4Z"
                fill="#1A6CF0"
              />
              {/* White crescent highlight on left */}
              <path
                d="M11 21C11 17.5 13.5 14 15 12C14 15 12 18.5 12.5 22C12.8 24 13.8 25.5 14.8 26.5C12.5 25.2 11 23.3 11 21Z"
                fill="white"
                fillOpacity="0.88"
              />
            </svg>
          </div>

          {/* Text Content */}
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-snug">
              Your property does not have an active <br className="hidden sm:inline" />
              Corporation water connection.
            </h2>

            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal pt-0.5">
              Get a new water connection for your property and enjoy <br className="hidden sm:inline" />
              safe and reliable water supply.
            </p>

            {/* Action Buttons in exact horizontal alignment */}
            <div className="flex flex-row items-center gap-3 sm:gap-3.5 pt-3 sm:pt-3.5">
              <button
                type="button"
                onClick={onCheckConnection}
                className="inline-flex items-center justify-center rounded-xl bg-[#1A6CF0] hover:bg-[#1558C9] active:bg-[#1048A8] text-white px-5 sm:px-6 py-2.5 text-xs sm:text-[13px] font-semibold shadow-xs hover:shadow transition-all cursor-pointer select-none"
              >
                Check Water Connection
              </button>

              <button
                type="button"
                onClick={onApplyConnection}
                className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-50/80 active:bg-slate-100 border border-[#CFE0FC] text-[#1A6CF0] hover:text-[#1558C9] px-5 sm:px-6 py-2.5 text-xs sm:text-[13px] font-semibold shadow-xs transition-all cursor-pointer select-none"
              >
                Apply for New Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

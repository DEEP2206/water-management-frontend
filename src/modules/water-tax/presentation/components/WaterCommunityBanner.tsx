"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { Droplet } from "lucide-react";

export interface WaterCommunityBannerProps {
  className?: string;
}

export const WaterCommunityBanner: React.FC<WaterCommunityBannerProps> = ({
  className = "",
}) => {
  return (
    <Card
      padding="none"
      className={`h-full flex flex-col justify-between overflow-hidden border border-teal-100/90 bg-white shadow-xs ${className}`}
    >
      {/* Header Info */}
      <div className="p-6 pb-4 shrink-0">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00897B] text-white shadow-sm shadow-teal-700/20">
            <Droplet className="h-6 w-6 fill-white" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-[#0D5E7A] leading-snug">
              Clean Water <br />
              Healthy Communities
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Your cooperation helps us build a better and more sustainable city.
            </p>
          </div>
        </div>
      </div>

      {/* Vector Illustration of Clean Sustainable City stretching to fill remaining card height */}
      <div className="flex-1 w-full min-h-[240px] relative overflow-hidden bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1] flex flex-col justify-end">
        <svg
          viewBox="0 0 280 340"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Skyline */}
          <g opacity="0.45">
            <rect x="20" y="145" width="22" height="195" fill="#99F6E4" />
            <rect x="46" y="90" width="26" height="250" fill="#99F6E4" />
            <rect x="76" y="150" width="18" height="190" fill="#99F6E4" />
            <rect x="100" y="60" width="32" height="280" fill="#5EEAD4" />
            <rect x="140" y="110" width="24" height="230" fill="#99F6E4" />
            <rect x="170" y="75" width="28" height="265" fill="#5EEAD4" />
            <rect x="204" y="130" width="20" height="210" fill="#99F6E4" />
            <rect x="230" y="105" width="24" height="235" fill="#99F6E4" />
          </g>

          {/* Clean River / Reservoir */}
          <path
            d="M0 270C40 262 80 278 140 270C200 262 240 274 280 268V340H0V270Z"
            fill="#2DD4BF"
            fillOpacity="0.4"
          />
          <path
            d="M0 295C60 290 120 302 180 294C230 288 260 298 280 292V340H0V295Z"
            fill="#0D9488"
            fillOpacity="0.3"
          />

          {/* Green Trees and Foliage */}
          <g>
            {/* Tree 1 */}
            <rect x="36" y="270" width="4" height="30" fill="#134E4A" />
            <circle cx="38" cy="260" r="16" fill="#059669" />
            <circle cx="34" cy="254" r="11" fill="#10B981" />

            {/* Tree 2 */}
            <rect x="76" y="278" width="4" height="28" fill="#134E4A" />
            <circle cx="78" cy="268" r="14" fill="#047857" />
            <circle cx="81" cy="262" r="10" fill="#34D399" />

            {/* Tree 3 */}
            <rect x="210" y="268" width="4" height="32" fill="#134E4A" />
            <circle cx="212" cy="256" r="18" fill="#059669" />
            <circle cx="208" cy="250" r="12" fill="#10B981" />

            {/* Tree 4 */}
            <rect x="245" y="276" width="4" height="26" fill="#134E4A" />
            <circle cx="247" cy="264" r="15" fill="#047857" />
          </g>
        </svg>
      </div>
    </Card>
  );
};

export default WaterCommunityBanner;

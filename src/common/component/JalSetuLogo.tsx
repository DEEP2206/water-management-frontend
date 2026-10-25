import React from "react";
import Image from "next/image";

export interface JalSetuLogoProps {
  size?: number;
  className?: string;
  useImage?: boolean;
}

export const JalSetuLogo: React.FC<JalSetuLogoProps> = ({
  size = 38,
  className = "",
  useImage = true,
}) => {
  if (useImage) {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src="/jalsetu-logo.jpg"
          alt="JalSetu Logo"
          width={size}
          height={size}
          priority
          className="object-contain"
        />
      </div>
    );
  }

  // High-precision vector SVG representation
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Top Drop with inner wave curve */}
        <path
          d="M50 16 C50 16 32 38 32 50 C32 55 35 60 39 63 C38 57 41 51 45 47 C43 53 47 57 53 58 C62 58 68 53 68 47 C68 37 50 16 50 16 Z"
          fill="#0066FF"
        />
        {/* Middle Cyan Wave */}
        <path
          d="M20 54 C35 52 46 62 65 62 C73 62 80 58 80 50 C76 60 66 68 52 68 C35 68 25 59 20 54 Z"
          fill="#00B0FF"
        />
        {/* Bottom Dark Blue Wave */}
        <path
          d="M23 66 C35 66 45 74 62 74 C70 74 74 71 74 71 C70 79 58 84 50 84 C38 84 27 77 23 66 Z"
          fill="#0052CC"
        />
      </svg>
    </div>
  );
};

export default JalSetuLogo;

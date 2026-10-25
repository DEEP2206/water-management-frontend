"use client";

import React from "react";
import {
  Droplets,
  Gauge,
  Megaphone,
  FileSearch,
  CreditCard,
  FolderOpen,
  ChevronRight,
} from "lucide-react";
import { QuickServiceItem } from "../../domain/entities/QuickStat";

export interface QuickServicesGridProps {
  services: QuickServiceItem[];
  onSelectService?: (service: QuickServiceItem) => void;
}

export const QuickServicesGrid: React.FC<QuickServicesGridProps> = ({
  services,
  onSelectService,
}) => {
  const getServiceVisuals = (iconName: QuickServiceItem["iconName"]) => {
    switch (iconName) {
      case "new-connection":
        return {
          icon: <Droplets className="h-5 w-5 text-[#0284C7]" />,
          bg: "bg-[#E0F2FE]",
        };
      case "meter":
        return {
          icon: <Gauge className="h-5 w-5 text-[#16A34A]" />,
          bg: "bg-[#DCFCE7]",
        };
      case "complaint":
        return {
          icon: <Megaphone className="h-5 w-5 text-[#EA580C]" />,
          bg: "bg-[#FFEDD5]",
        };
      case "track":
        return {
          icon: <FileSearch className="h-5 w-5 text-[#9333EA]" />,
          bg: "bg-[#F3E8FF]",
        };
      case "payment":
        return {
          icon: <CreditCard className="h-5 w-5 text-[#2563EB]" />,
          bg: "bg-[#DBEAFE]",
        };
      case "documents":
        return {
          icon: <FolderOpen className="h-5 w-5 text-[#0D9488]" />,
          bg: "bg-[#CCFBF1]",
        };
      default:
        return {
          icon: <Droplets className="h-5 w-5 text-blue-600" />,
          bg: "bg-blue-50",
        };
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-slate-800">Quick Services</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item) => {
          const { icon, bg } = getServiceVisuals(item.iconName);
          return (
            <div
              key={item.id}
              onClick={() => onSelectService?.(item)}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg} group-hover:scale-105 transition-transform duration-200`}
                >
                  {icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#1A6CF0] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>

              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#1A6CF0] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickServicesGrid;

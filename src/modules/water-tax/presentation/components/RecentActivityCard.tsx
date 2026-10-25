"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { WaterActivityItem } from "../../domain/entities/WaterPayment";

export interface RecentActivityCardProps {
  activities: WaterActivityItem[];
  onViewFullHistory?: () => void;
  className?: string;
}

export const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  activities,
  onViewFullHistory,
  className = "",
}) => {
  return (
    <Card
      padding="md"
      title="Recent Activity"
      className={`h-full min-h-[300px] flex flex-col border-slate-200/90 shadow-xs hover:shadow-sm ${className}`}
      headerAction={
        <button
          type="button"
          onClick={onViewFullHistory}
          className="text-[11px] font-semibold text-[#1A6CF0] hover:underline cursor-pointer"
        >
          View Full History
        </button>
      }
    >
      <div className="relative pl-5 space-y-4 pt-1 flex-1">
        {/* Continuous vertical timeline connector line */}
        <div className="absolute left-[7px] top-2 bottom-3 w-[2px] bg-slate-200" />

        {activities.map((item) => (
          <div key={item.id} className="relative flex items-start gap-3">
            {/* Timeline bullet circle */}
            <span
              className="absolute -left-5 top-1 h-3.5 w-3.5 rounded-full border-2 border-white shadow-xs"
              style={{ backgroundColor: item.statusColor }}
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-xs font-bold text-slate-800">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">
                  {item.timestamp}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivityCard;

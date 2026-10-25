"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { Droplet, ChevronRight } from "lucide-react";
import { QuickStatsEntity } from "../../domain/entities/QuickStat";

export interface QuickStatsCardProps {
  stats: QuickStatsEntity;
  onViewStats?: () => void;
}

export const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  stats,
  onViewStats,
}) => {
  return (
    <Card
      padding="md"
      className="h-full flex flex-col justify-between cursor-pointer group hover:border-blue-200"
      onClick={onViewStats}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#1A6CF0]">
            <Droplet className="h-3.5 w-3.5 fill-[#1A6CF0]" />
          </div>
          <span className="text-xs font-bold text-slate-800">Quick Stats</span>
        </div>
        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#1A6CF0] group-hover:translate-x-0.5 transition-all" />
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="space-y-0.5">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            {stats.activeConnections}
          </div>
          <div className="text-[11px] font-medium text-slate-500">
            Active Connections
          </div>
        </div>

        <div className="space-y-0.5">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            {stats.pendingApplications}
          </div>
          <div className="text-[11px] font-medium text-slate-500">
            Pending Applications
          </div>
        </div>

        <div className="space-y-0.5 pt-2">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            {stats.pendingPayments}
          </div>
          <div className="text-[11px] font-medium text-slate-500">
            Pending Payments
          </div>
        </div>

        <div className="space-y-0.5 pt-2">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            {stats.openComplaints}
          </div>
          <div className="text-[11px] font-medium text-slate-500">
            Open Complaints
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuickStatsCard;

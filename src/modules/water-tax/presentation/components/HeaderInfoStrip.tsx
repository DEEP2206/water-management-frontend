"use client";

import React from "react";
import { Clock, MapPin, AlertCircle } from "lucide-react";
import { WaterConnectionEntity } from "../../domain/entities/WaterConnection";
import { Badge } from "@/common/component/Badge";

export interface HeaderInfoStripProps {
  connectionInfo: WaterConnectionEntity;
}

export const HeaderInfoStrip: React.FC<HeaderInfoStripProps> = ({
  connectionInfo,
}) => {
  return (
    <div className="space-y-4">
      {/* Welcome Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Welcome back, {connectionInfo.userName}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Here&apos;s an overview of your water services and recent activities.
        </p>
      </div>

      {/* Info Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 py-1">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>Last login:</span>
            <span className="font-medium text-slate-700">
              {connectionInfo.lastLogin}
            </span>
          </div>

          <span className="hidden sm:inline text-slate-300">|</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span>Current Property:</span>
            <span className="font-medium text-slate-700">
              {connectionInfo.propertyAddress}
            </span>
          </div>
        </div>

        {/* Right Status Indicator */}
        {!connectionInfo.hasActiveConnection && (
          <Badge
            variant="danger"
            size="sm"
            icon={<AlertCircle className="h-3.5 w-3.5 text-red-600" />}
            className="font-medium px-3 py-1"
          >
            No Active Connection
          </Badge>
        )}
      </div>
    </div>
  );
};

export default HeaderInfoStrip;

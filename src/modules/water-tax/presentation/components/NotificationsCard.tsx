"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import {
  Bell,
  Droplet,
  FileCheck2,
  Receipt,
  ClipboardList,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { WaterNotificationEntity } from "../../domain/entities/WaterNotification";

export interface NotificationsCardProps {
  notifications: WaterNotificationEntity[];
  onViewAll?: () => void;
}

export const NotificationsCard: React.FC<NotificationsCardProps> = ({
  notifications,
  onViewAll,
}) => {
  const getIcon = (type: WaterNotificationEntity["type"]) => {
    switch (type) {
      case "success":
        return {
          icon: <Droplet className="h-4 w-4 text-[#0284C7] fill-[#0284C7]" />,
          bg: "bg-[#E0F2FE]",
        };
      case "warning":
        return {
          icon: <FileCheck2 className="h-4 w-4 text-[#0D9488]" />,
          bg: "bg-[#CCFBF1]",
        };
      case "payment":
        return {
          icon: <Receipt className="h-4 w-4 text-[#16A34A]" />,
          bg: "bg-[#DCFCE7]",
        };
      case "inspection":
        return {
          icon: <ClipboardList className="h-4 w-4 text-[#2563EB]" />,
          bg: "bg-[#DBEAFE]",
        };
      case "assignment":
        return {
          icon: <AlertCircle className="h-4 w-4 text-[#EA580C]" />,
          bg: "bg-[#FFEDD5]",
        };
      default:
        return {
          icon: <Bell className="h-4 w-4 text-slate-500" />,
          bg: "bg-slate-100",
        };
    }
  };

  return (
    <Card padding="md" className="h-full flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-slate-700" />
            <h3 className="text-xs font-bold text-slate-800">Notifications</h3>
          </div>
          <button
            type="button"
            onClick={onViewAll}
            className="text-[11px] font-semibold text-[#1A6CF0] hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
          {notifications.map((item) => {
            const { icon, bg } = getIcon(item.type);
            return (
              <div
                key={item.id}
                className="py-3 flex items-start gap-3 group cursor-pointer hover:bg-slate-50/60 rounded-md px-1 transition-colors"
              >
                {/* Circular Badge */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${bg} mt-0.5`}
                >
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-[#1A6CF0] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap shrink-0">
                      {item.timeAgo}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-slate-100 mt-2">
        <button
          type="button"
          onClick={onViewAll}
          className="w-full flex items-center justify-between text-xs font-semibold text-[#1A6CF0] hover:text-blue-700 cursor-pointer group"
        >
          <span>View All Notifications</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </Card>
  );
};

export default NotificationsCard;

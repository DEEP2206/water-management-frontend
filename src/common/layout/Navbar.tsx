"use client";

import React from "react";
import { Search, HelpCircle, Bell, ChevronDown, User } from "lucide-react";
import { JalSetuLogo } from "@/common/component/JalSetuLogo";

import citizensData from "@/mock-data/citizens.json";
import notificationsData from "@/mock-data/notifications.json";

const defaultCitizen = citizensData[0];

export interface NavbarProps {
  userName?: string;
  userRole?: string;
  notificationCount?: number;
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  userName = defaultCitizen.userName,
  userRole = defaultCitizen.role,
  notificationCount = notificationsData.length,
  onSearch,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6 gap-4 sm:gap-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            {/* JalSetu Exact Logo */}
            <JalSetuLogo size={40} />

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight text-[#0D3C94]">
                  JalSetu
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <h1 className="text-xs font-semibold text-slate-800 leading-tight">
              Municipal Water Management System
            </h1>
            <p className="text-[11px] text-slate-500 leading-tight">
              Your Connection to Better Water Services
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-xl mx-2 sm:mx-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search for applications, complaints, or services..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-slate-50/60 py-2 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#1A6CF0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A6CF0]/15 transition-all"
            />
          </div>
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Help link */}
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-slate-50"
          >
            <HelpCircle className="h-4 w-4 text-slate-500" />
            <span className="hidden md:inline">Help</span>
          </button>

          {/* Notifications bell */}
          <div className="relative">
            <button
              type="button"
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4 text-slate-600" />
              {notificationCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#E13B30] text-[10px] font-bold text-white shadow-xs">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 sm:gap-3 pl-2 border-l border-slate-200 cursor-pointer select-none group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6CF0] text-white shadow-xs overflow-hidden">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-800 leading-tight group-hover:text-[#1A6CF0] transition-colors">
                {userName}
              </span>
              <span className="text-[11px] text-slate-400 leading-tight">
                {userRole}
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import React from "react";
import { useWaterTaxDashboard } from "../../application/hooks/useWaterTaxDashboard";
import { HeaderInfoStrip } from "../components/HeaderInfoStrip";
import { HeroBanner } from "../components/HeroBanner";
import { QuickStatsCard } from "../components/QuickStatsCard";
import { NotificationsCard } from "../components/NotificationsCard";
import { QuickServicesGrid } from "../components/QuickServicesGrid";
import { ApplicationsTableCard } from "../components/ApplicationsTableCard";
import { ComplaintsTableCard } from "../components/ComplaintsTableCard";
import { WaterCommunityBanner } from "../components/WaterCommunityBanner";
import { PaymentsCard } from "../components/PaymentsCard";
import { RecentActivityCard } from "../components/RecentActivityCard";

export const WaterTaxDashboardView: React.FC = () => {
  const { data, loading, error } = useWaterTaxDashboard();

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex items-center gap-3 text-slate-500">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#1A6CF0] border-t-transparent" />
          <span className="text-sm font-medium">Loading water services...</span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
        <p className="text-sm font-medium">{error || "Failed to load dashboard data"}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Welcome Title & Info Strip */}
      <HeaderInfoStrip connectionInfo={data.connectionInfo} />

      {/* 1. Top Section: Hero Banner & Quick Stats + Quick Services (Left), Notifications (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Top Group */}
        <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-8">
              <HeroBanner />
            </div>
            <div className="lg:col-span-4">
              <QuickStatsCard stats={data.stats} />
            </div>
          </div>

          <QuickServicesGrid services={data.services} />
        </div>

        {/* Right Notifications Card */}
        <div className="lg:col-span-4 flex">
          <NotificationsCard notifications={data.notifications} />
        </div>
      </div>

      {/* 2. Bottom Section: 5 Cards Grid */}
      {/* First 4 Cards: My Applications, My Complaints, Payments, Recent Activity in 2x2 equal window button box format */}
      {/* 5th Card: Clean Water Healthy Communities stretching across the height of both rows beside it (My Complaints + Recent Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 4 Equal-Sized Cards in 2x2 Window Button Box Format */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 items-stretch">
          <ApplicationsTableCard applications={data.applications} />
          <ComplaintsTableCard complaints={data.complaints} />
          <PaymentsCard paymentSummary={data.paymentSummary} />
          <RecentActivityCard activities={data.recentActivities} />
        </div>

        {/* 5th Card: Clean Water Healthy Communities Banner stretching height across the two cards on its side */}
        <div className="lg:col-span-4 flex flex-col">
          <WaterCommunityBanner className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WaterTaxDashboardView;

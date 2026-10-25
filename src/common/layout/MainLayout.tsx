"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import citizensData from "@/mock-data/citizens.json";

const defaultCitizen = citizensData[0];

export interface MainLayoutProps {
  children: React.ReactNode;
  activeNavId?: string;
  userName?: string;
  userRole?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeNavId = "dashboard",
  userName = defaultCitizen.userName,
  userRole = defaultCitizen.role,
}) => {
  const [currentNav, setCurrentNav] = useState(activeNavId);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(230);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7FC] text-slate-800 antialiased font-sans">
      {/* Top Navbar */}
      <Navbar
        userName={userName}
        userRole={userRole}
      />

      {/* Main body: Sidebar + Content */}
      <div className="flex flex-1 w-full overflow-hidden">
        <Sidebar
          activeId={currentNav}
          onItemClick={(id) => setCurrentNav(id)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
          width={sidebarWidth}
          onWidthChange={(w) => setSidebarWidth(w)}
        />

        {/* Scrollable Main Content Area */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-7 py-5 sm:py-6">
          <div className="mx-auto max-w-[1400px]">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Droplets,
  Gauge,
  FileText,
  Megaphone,
  CreditCard,
  FolderOpen,
  MapPin,
  Clock3,
  UserCircle,
  X,
  ChevronRight,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface SidebarProps {
  activeId?: string;
  onItemClick?: (id: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  width?: number;
  onWidthChange?: (newWidth: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeId = "dashboard",
  onItemClick,
  isMobileOpen = false,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
  width = 230,
  onWidthChange,
}) => {
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
      href: "/dashboard",
      active: activeId === "dashboard",
    },
    {
      id: "properties",
      label: "My Properties",
      icon: <Building2 className="h-4 w-4" />,
      href: "#properties",
      active: activeId === "properties",
    },
    {
      id: "connection",
      label: "Water Connection",
      icon: <Droplets className="h-4 w-4" />,
      href: "#connection",
      active: activeId === "connection",
    },
    {
      id: "meter",
      label: "Water Meter",
      icon: <Gauge className="h-4 w-4" />,
      href: "#meter",
      active: activeId === "meter",
    },
    {
      id: "applications",
      label: "Applications",
      icon: <FileText className="h-4 w-4" />,
      href: "#applications",
      active: activeId === "applications",
    },
    {
      id: "complaints",
      label: "Complaints",
      icon: <Megaphone className="h-4 w-4" />,
      href: "#complaints",
      active: activeId === "complaints",
    },
    {
      id: "payments",
      label: "Payments",
      icon: <CreditCard className="h-4 w-4" />,
      href: "#payments",
      active: activeId === "payments",
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FolderOpen className="h-4 w-4" />,
      href: "#documents",
      active: activeId === "documents",
    },
    {
      id: "tracking",
      label: "Tracking",
      icon: <MapPin className="h-4 w-4" />,
      href: "#tracking",
      active: activeId === "tracking",
    },
    {
      id: "history",
      label: "Service History",
      icon: <Clock3 className="h-4 w-4" />,
      href: "#history",
      active: activeId === "history",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <UserCircle className="h-4 w-4" />,
      href: "#profile",
      active: activeId === "profile",
    },
  ];

  // Drag-to-resize handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = width;

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = moveEvent.clientX - startXRef.current;
      const calculatedWidth = startWidthRef.current + deltaX;

      // Constrain sidebar width between 180px and 400px
      if (calculatedWidth >= 170 && calculatedWidth <= 420) {
        onWidthChange?.(calculatedWidth);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        onCloseMobile?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen, onCloseMobile]);

  // Shared navigation link list renderer
  const renderNavLinks = (compact: boolean, isMobile: boolean) => (
    <div className="p-3 space-y-1">
      {navItems.map((item) => {
        const isActive = item.active;
        return (
          <Link
            key={item.id}
            href={item.href}
            title={compact ? item.label : undefined}
            onClick={(e) => {
              if (item.href.startsWith("#")) {
                e.preventDefault();
              }
              onItemClick?.(item.id);
              if (isMobile) {
                onCloseMobile?.();
              }
            }}
            className={`group relative flex items-center ${
              compact ? "justify-center px-2 py-2.5" : "gap-3 px-3.5 py-2.5"
            } rounded-lg text-xs font-medium transition-all duration-150 select-none ${
              isActive
                ? "bg-[#1A6CF0] text-white shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <span
              className={`shrink-0 ${
                isActive ? "text-white" : "text-slate-500 group-hover:text-slate-800"
              }`}
            >
              {item.icon}
            </span>
            {!compact && <span className="truncate">{item.label}</span>}

            {/* Hover Tooltip in compact mode */}
            {compact && (
              <span className="pointer-events-none absolute left-full ml-2.5 hidden group-hover:inline-block z-50 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-md">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE DRAWER WITH BACKDROP & CROSS BUTTON        */}
      {/* ---------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div
          onClick={onCloseMobile}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />

        {/* Slide-out Off-canvas Drawer */}
        <aside
          className={`absolute inset-y-0 left-0 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Drawer Header with Close/Cross Button */}
          <div>
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1A6CF0]">
                  <Droplets className="h-4 w-4" />
                </div>
                <span className="font-bold text-slate-800 text-sm">JalSetu Menu</span>
              </div>

              {/* Cross (Close) Button */}
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close navigation sidebar"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="overflow-y-auto max-h-[calc(100vh-12rem)]">
              {renderNavLinks(false, true)}
            </div>
          </div>

          {/* Municipal Footer in Mobile */}
          <div className="p-4 border-t border-slate-100 flex flex-col items-center text-center bg-slate-50/50">
            <h2 className="text-xs font-bold text-slate-800">
              Pune Municipal Corporation
            </h2>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Clean Water • Healthy City • Better Tomorrow
            </p>
          </div>
        </aside>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. DESKTOP SIDEBAR WITH RESIZE HANDLE & CROSS TOGGLE */}
      {/* ---------------------------------------------------- */}
      <aside
        style={{
          width: isCollapsed ? 68 : `${width}px`,
        }}
        className="hidden lg:flex shrink-0 relative border-r border-slate-200/80 bg-white flex-col justify-between min-h-[calc(100vh-4rem)] select-none group/sidebar transition-[width] duration-150"
      >
        <div className="relative">
          {/* Subtle Cross Button on top right when expanded */}
          {!isCollapsed && onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="absolute right-2 top-2 z-20 p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 opacity-0 group-hover/sidebar:opacity-100 transition-opacity cursor-pointer"
              title="Collapse Sidebar (Cross)"
              aria-label="Collapse Sidebar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}

          {/* Re-expand button when collapsed */}
          {isCollapsed && onToggleCollapse && (
            <div className="flex justify-center pt-2 pb-1 border-b border-slate-100">
              <button
                type="button"
                onClick={onToggleCollapse}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Expand Sidebar"
                aria-label="Expand Sidebar"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Desktop Nav Items */}
          {renderNavLinks(isCollapsed, false)}
        </div>

        {/* Municipal Branding Footer at Bottom of Desktop Sidebar */}
        <div
          className={`p-3 border-t border-slate-100 flex flex-col items-center text-center ${
            isCollapsed ? "py-4" : "p-4"
          }`}
        >
          {!isCollapsed ? (
            <>
              {/* City Skyline Vector Illustration */}
              <div className="w-full flex justify-center mb-2 text-[#60A5FA]">
                <svg
                  viewBox="0 0 160 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-32 h-11 opacity-80"
                >
                  <path
                    d="M10 60V35H25V60M30 60V22H45V60M50 60V15H65V60M70 60V30H85V60M90 60V18H105V60M110 60V28H125V60M130 60V38H145V60"
                    fill="#E0EDFE"
                  />
                  <path
                    d="M18 60V40H28V60M38 60V30H48V60M55 60V25H72V60M80 60V35H92V60M98 60V26H115V60M120 60V42H135V60"
                    fill="#BFDBFE"
                  />
                  <path
                    d="M57 15L62 5L67 15H57ZM97 18L102 8L107 18H97Z"
                    fill="#93C5FD"
                  />
                  <path
                    d="M0 58C20 56 40 60 60 58C80 56 100 60 120 58C140 56 160 58 160 58V60H0V58Z"
                    fill="#60A5FA"
                  />
                </svg>
              </div>

              <h2 className="text-xs font-bold text-slate-800 tracking-tight">
                Pune Municipal Corporation
              </h2>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                Clean Water • Healthy City • Better Tomorrow
              </p>
            </>
          ) : (
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#1A6CF0]"
              title="Pune Municipal Corporation"
            >
              <Droplets className="h-4 w-4" />
            </div>
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. INTERACTIVE DRAG-TO-RESIZE BORDER HANDLE          */}
        {/* ---------------------------------------------------- */}
        {!isCollapsed && (
          <div
            onMouseDown={handleMouseDown}
            onDoubleClick={() => onWidthChange?.(230)}
            title="Drag to resize sidebar width (Double-click to reset)"
            className="absolute top-0 right-0 bottom-0 w-2 hover:w-2.5 -mr-1 cursor-col-resize z-30 group/resizer flex items-center justify-center"
          >
            <div className="w-1 h-8 rounded-full bg-slate-300 opacity-0 group-hover/resizer:opacity-100 group-hover/sidebar:opacity-40 transition-opacity bg-blue-400" />
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;

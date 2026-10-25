"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { Table, TableColumn } from "@/common/component/Table";
import { Badge, BadgeVariant } from "@/common/component/Badge";
import { Button } from "@/common/component/Button";
import { WaterApplicationEntity } from "../../domain/entities/WaterApplication";

export interface ApplicationsTableCardProps {
  applications: WaterApplicationEntity[];
  onViewAll?: () => void;
  onViewApplication?: (app: WaterApplicationEntity) => void;
  className?: string;
}

export const ApplicationsTableCard: React.FC<ApplicationsTableCardProps> = ({
  applications,
  onViewAll,
  onViewApplication,
  className = "",
}) => {
  const getBadgeVariant = (status: WaterApplicationEntity["status"]): BadgeVariant => {
    switch (status) {
      case "UNDER_REVIEW":
        return "warning";
      case "SUBMITTED":
        return "info";
      case "APPROVED":
        return "success";
      case "REJECTED":
        return "danger";
      default:
        return "neutral";
    }
  };

  const columns: TableColumn<WaterApplicationEntity>[] = [
    {
      key: "applicationNumber",
      header: "Application No.",
      render: (row) => (
        <button
          type="button"
          onClick={() => onViewApplication?.(row)}
          className="font-semibold text-[#1A6CF0] hover:underline cursor-pointer whitespace-nowrap text-left"
        >
          {row.applicationNumber}
        </button>
      ),
    },
    {
      key: "serviceType",
      header: "Service Type",
      render: (row) => <span className="text-slate-700 whitespace-nowrap">{row.serviceType}</span>,
    },
    {
      key: "submittedDate",
      header: "Submitted Date",
      render: (row) => <span className="text-slate-500 whitespace-nowrap">{row.submittedDate}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <Badge variant={getBadgeVariant(row.status)} size="xs">
          {row.statusLabel}
        </Badge>
      ),
    },
    {
      key: "nextAction",
      header: "Next Action",
      render: (row) => (
        <div className="flex items-center justify-between gap-2">
          <span className="text-slate-500 text-[11px] truncate max-w-[120px]">{row.nextAction}</span>
          <Button
            variant="outline-gray"
            size="xs"
            onClick={() => onViewApplication?.(row)}
            className="text-[#1A6CF0] hover:border-[#1A6CF0] hover:bg-blue-50/50 font-semibold px-2 py-0.5 shrink-0"
          >
            View
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card
      padding="md"
      title="My Applications"
      className={`h-full min-h-[300px] flex flex-col border-slate-200/90 shadow-xs hover:shadow-sm ${className}`}
      headerAction={
        <button
          type="button"
          onClick={onViewAll}
          className="text-[11px] font-semibold text-[#1A6CF0] hover:underline cursor-pointer"
        >
          View All
        </button>
      }
    >
      <Table columns={columns} data={applications} />
    </Card>
  );
};

export default ApplicationsTableCard;

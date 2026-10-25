"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { Table, TableColumn } from "@/common/component/Table";
import { Badge, BadgeVariant } from "@/common/component/Badge";
import { WaterComplaintEntity } from "../../domain/entities/WaterComplaint";

export interface ComplaintsTableCardProps {
  complaints: WaterComplaintEntity[];
  onViewAll?: () => void;
  onViewComplaint?: (cmp: WaterComplaintEntity) => void;
  className?: string;
}

export const ComplaintsTableCard: React.FC<ComplaintsTableCardProps> = ({
  complaints,
  onViewAll,
  onViewComplaint,
  className = "",
}) => {
  const getBadgeVariant = (status: WaterComplaintEntity["status"]): BadgeVariant => {
    switch (status) {
      case "IN_PROGRESS":
        return "info";
      case "RESOLVED":
        return "success";
      case "CLOSED":
        return "neutral";
      default:
        return "neutral";
    }
  };

  const columns: TableColumn<WaterComplaintEntity>[] = [
    {
      key: "complaintNumber",
      header: "Complaint No.",
      render: (row) => (
        <span
          onClick={() => onViewComplaint?.(row)}
          className="font-medium text-slate-800 hover:text-[#1A6CF0] cursor-pointer whitespace-nowrap"
        >
          {row.complaintNumber}
        </span>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (row) => <span className="text-slate-700 whitespace-nowrap">{row.category}</span>,
    },
    {
      key: "date",
      header: "Date",
      render: (row) => <span className="text-slate-500 whitespace-nowrap">{row.date}</span>,
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
  ];

  return (
    <Card
      padding="md"
      title="My Complaints"
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
      <Table columns={columns} data={complaints} />
    </Card>
  );
};

export default ComplaintsTableCard;

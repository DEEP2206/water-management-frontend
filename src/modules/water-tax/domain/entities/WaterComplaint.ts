export type ComplaintStatus = "IN_PROGRESS" | "RESOLVED" | "CLOSED" | "PENDING";

export interface WaterComplaintEntity {
  id: string;
  complaintNumber: string;
  category: string;
  date: string;
  status: ComplaintStatus;
  statusLabel: string;
}

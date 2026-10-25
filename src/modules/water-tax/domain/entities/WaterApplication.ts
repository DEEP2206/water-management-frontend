export type ApplicationStatus = "UNDER_REVIEW" | "SUBMITTED" | "APPROVED" | "REJECTED";

export interface WaterApplicationEntity {
  id: string;
  applicationNumber: string;
  serviceType: string;
  submittedDate: string;
  status: ApplicationStatus;
  statusLabel: string;
  nextAction: string;
}

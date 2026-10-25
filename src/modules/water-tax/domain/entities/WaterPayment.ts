export interface WaterPaymentSummary {
  pendingAmount: number;
  pendingFormatted: string;
  pendingTitle: string;
  pendingSubtitle: string;
  recentAmount: number;
  recentFormatted: string;
  recentTitle: string;
  recentDateFormatted: string;
}

export interface WaterActivityItem {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  type: "application" | "payment" | "document" | "complaint";
  statusColor: string;
}

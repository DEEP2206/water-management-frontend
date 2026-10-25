export interface QuickStatsEntity {
  activeConnections: number;
  pendingApplications: number;
  pendingPayments: number;
  openComplaints: number;
}

export interface QuickServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "new-connection" | "meter" | "complaint" | "track" | "payment" | "documents";
  href: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  route: string;
  icon?: string;
}

export interface WaterTaxRecord {
  id: string;
  consumerNumber: string;
  ownerName: string;
  amountDue: number;
  dueDate: string;
  status: "PAID" | "PENDING" | "OVERDUE";
}

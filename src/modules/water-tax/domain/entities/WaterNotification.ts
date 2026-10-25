export interface WaterNotificationEntity {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  type: "success" | "warning" | "payment" | "inspection" | "assignment";
}

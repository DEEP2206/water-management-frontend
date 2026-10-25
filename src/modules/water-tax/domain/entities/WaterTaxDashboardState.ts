import { WaterConnectionEntity } from "./WaterConnection";
import { WaterApplicationEntity } from "./WaterApplication";
import { WaterComplaintEntity } from "./WaterComplaint";
import { WaterPaymentSummary, WaterActivityItem } from "./WaterPayment";
import { WaterNotificationEntity } from "./WaterNotification";
import { QuickStatsEntity, QuickServiceItem } from "./QuickStat";

export interface WaterTaxDashboardState {
  connectionInfo: WaterConnectionEntity;
  stats: QuickStatsEntity;
  services: QuickServiceItem[];
  notifications: WaterNotificationEntity[];
  applications: WaterApplicationEntity[];
  complaints: WaterComplaintEntity[];
  paymentSummary: WaterPaymentSummary;
  recentActivities: WaterActivityItem[];
}

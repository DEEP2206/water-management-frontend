import { WaterTaxDashboardState } from "../../domain/entities/WaterTaxDashboardState";
import { WaterConnectionEntity } from "../../domain/entities/WaterConnection";
import { WaterApplicationEntity } from "../../domain/entities/WaterApplication";
import { WaterComplaintEntity } from "../../domain/entities/WaterComplaint";
import { WaterNotificationEntity } from "../../domain/entities/WaterNotification";
import { QuickServiceItem } from "../../domain/entities/QuickStat";
import { WaterActivityItem } from "../../domain/entities/WaterPayment";

// Static mock data JSON sources
import citizensData from "@/mock-data/citizens.json";
import propertiesData from "@/mock-data/properties.json";
import connectionsData from "@/mock-data/connections.json";
import applicationsData from "@/mock-data/applications.json";
import complaintsData from "@/mock-data/complaints.json";
import paymentsData from "@/mock-data/payments.json";
import notificationsData from "@/mock-data/notifications.json";
import screenDashboardData from "@/mock-data/water-tax-dashboard.json";

const defaultCitizen = citizensData[0];
const defaultProperty = propertiesData[0];
const defaultConnection = connectionsData[0];

export const initialWaterTaxDashboardData: WaterTaxDashboardState = {
  connectionInfo: {
    id: defaultConnection.id || defaultProperty.id,
    userName: defaultCitizen.userName,
    propertyAddress: defaultProperty.propertyAddress,
    hasActiveConnection: defaultConnection.hasActiveConnection,
    status: defaultConnection.status as WaterConnectionEntity["status"],
    lastLogin: defaultCitizen.lastLogin,
  },
  stats: screenDashboardData.stats,
  services: screenDashboardData.services as QuickServiceItem[],
  notifications: notificationsData as WaterNotificationEntity[],
  applications: applicationsData as WaterApplicationEntity[],
  complaints: complaintsData as WaterComplaintEntity[],
  paymentSummary: paymentsData.summary,
  recentActivities: screenDashboardData.recentActivities as WaterActivityItem[],
};

export default initialWaterTaxDashboardData;

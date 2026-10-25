import citizensData from "./citizens.json";
import propertiesData from "./properties.json";
import connectionsData from "./connections.json";
import applicationsData from "./applications.json";
import complaintsData from "./complaints.json";
import paymentsData from "./payments.json";
import notificationsData from "./notifications.json";
import waterTaxDashboardData from "./water-tax-dashboard.json";

export {
  citizensData,
  propertiesData,
  connectionsData,
  applicationsData,
  complaintsData,
  paymentsData,
  notificationsData,
  waterTaxDashboardData,
};

export const mockData = {
  citizens: citizensData,
  properties: propertiesData,
  connections: connectionsData,
  applications: applicationsData,
  complaints: complaintsData,
  payments: paymentsData,
  notifications: notificationsData,
  waterTaxDashboard: waterTaxDashboardData,
};

export default mockData;

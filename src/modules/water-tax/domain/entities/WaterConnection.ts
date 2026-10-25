export interface WaterConnectionEntity {
  id: string;
  propertyAddress: string;
  hasActiveConnection: boolean;
  status: "NO_ACTIVE_CONNECTION" | "ACTIVE" | "PENDING";
  lastLogin: string;
  userName: string;
}

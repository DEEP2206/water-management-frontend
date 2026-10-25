import { WaterTaxDashboardState } from "../entities/WaterTaxDashboardState";

export interface IWaterTaxRepository {
  getDashboardData(): Promise<WaterTaxDashboardState>;
}

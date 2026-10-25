import { IWaterTaxRepository } from "../../domain/repositories/IWaterTaxRepository";
import { WaterTaxDashboardState } from "../../domain/entities/WaterTaxDashboardState";
import { initialWaterTaxDashboardData } from "../mock-data/waterTaxDashboardData";

export class WaterTaxRepository implements IWaterTaxRepository {
  async getDashboardData(): Promise<WaterTaxDashboardState> {
    // In production, this calls the backend REST API
    return Promise.resolve(initialWaterTaxDashboardData);
  }
}

export const waterTaxRepository = new WaterTaxRepository();

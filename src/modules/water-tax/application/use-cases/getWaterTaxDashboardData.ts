import { IWaterTaxRepository } from "../../domain/repositories/IWaterTaxRepository";
import { WaterTaxDashboardState } from "../../domain/entities/WaterTaxDashboardState";

export async function getWaterTaxDashboardData(
  repository: IWaterTaxRepository
): Promise<WaterTaxDashboardState> {
  return await repository.getDashboardData();
}

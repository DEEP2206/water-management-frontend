"use client";

import { useState, useEffect } from "react";
import { WaterTaxDashboardState } from "../../domain/entities/WaterTaxDashboardState";
import { waterTaxRepository } from "../../infrastructure/repositories/WaterTaxRepository";
import { getWaterTaxDashboardData } from "../use-cases/getWaterTaxDashboardData";

export function useWaterTaxDashboard() {
  const [data, setData] = useState<WaterTaxDashboardState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const result = await getWaterTaxDashboardData(waterTaxRepository);
        if (mounted) {
          setData(result);
          setError(null);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err?.message || "Failed to load dashboard data");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}

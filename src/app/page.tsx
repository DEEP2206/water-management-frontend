import { MainLayout } from "@/common/layout";
import { WaterTaxDashboardView } from "@/modules/water-tax";

export default function Home() {
  return (
    <MainLayout activeNavId="dashboard">
      <WaterTaxDashboardView />
    </MainLayout>
  );
}

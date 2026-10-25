import React from "react";
import { MainLayout as CommonMainLayout, type MainLayoutProps } from "@/common/layout";

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return <CommonMainLayout {...props} />;
};

export default MainLayout;

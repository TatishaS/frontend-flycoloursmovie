import type { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

export const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 md:px-10">{children}</div>
    </div>
  );
};

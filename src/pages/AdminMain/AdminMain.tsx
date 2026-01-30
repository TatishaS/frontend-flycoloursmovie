import type { ReactNode } from "react";
import { AdminMenu } from "@/components/AdminMenu/AdminMenu";

export const AdminMain = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <AdminMenu />
      {children}
    </>
  );
};

import { AdminMenu } from "@/components/AdminMenu/AdminMenu";
import { Outlet } from "react-router";

export const AdminLayout: React.FC = () => {
  return (
    <div className="md:grid md:grid-cols-4">
      <AdminMenu />
      <Outlet />
    </div>
  );
};

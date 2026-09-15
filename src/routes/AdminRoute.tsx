import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "@/redux/store";
import {
  checkIsAuth,
  selectIsAdmin,
  selectIsAuthResolved,
} from "@/redux/slices/authSlice";

export const AdminRoute: React.FC = () => {
  const isAuth = useAppSelector(checkIsAuth);
  const isAdmin = useAppSelector(selectIsAdmin);
  const isResolved = useAppSelector(selectIsAuthResolved);
  console.log(isResolved);

  if (!isResolved) {
    return <p className="py-10 text-center">Загрузка…</p>;
  }

  if (!isAuth || !isAdmin) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

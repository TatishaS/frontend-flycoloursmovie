import { Navigate, Outlet, useLocation } from "react-router";

import { useAppSelector } from "@/redux/store";
import { checkIsAuth, selectIsAuthResolved } from "@/redux/slices/authSlice";

export const ProtectedRoute: React.FC = () => {
  const isAuth = useAppSelector(checkIsAuth);
  const isResolved = useAppSelector(selectIsAuthResolved);
  const location = useLocation();

  if (!isResolved) {
    return <p className="py-10 text-center">Загрузка…</p>;
  }

  if (!isAuth) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

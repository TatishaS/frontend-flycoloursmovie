import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { MainPage } from "./pages/Main/MainPage";
import { FilmPage } from "./pages/FilmPage/FilmPage";
import { BookPage } from "./pages/Book/BookPage";
import { FilmProvider } from "./contexts/Film/Provider";
import { ActivitiesList } from "./components/ActivitiesList/ActivitiesList";
import { MainLayout } from "./layouts/MainLayout/MainLayout";

import { UserMain } from "./pages/UserMain/UserMain";
import { Page404 } from "./pages/Page404/Page404";
import { AddActivity } from "./components/AddActivity/AddActivity";
import { AdminLayout } from "./layouts/AdminLayout/AdminLayout";
import { AllBookings } from "./components/AllBookings/AllBookings";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { useAppDispatch } from "./redux/store";
import { fetchUser } from "./redux/slices/authSlice";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AdminRoute } from "./routes/AdminRoute";

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <FilmProvider>
        <div className="container mx-auto">
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route index element={<MainPage />} />
                <Route path="films" element={<ActivitiesList />} />
                <Route path="films/:filmId" element={<FilmPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="book" element={<BookPage />} />
                  <Route path="users/:userId" element={<UserMain />} />
                </Route>

                <Route element={<AdminRoute />}>
                  <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="bookings" element={<AllBookings />} />
                    <Route path="activities" element={<AllBookings />} />
                    <Route path="create" element={<AddActivity />} />
                  </Route>
                </Route>

                <Route path="404" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </div>
      </FilmProvider>
    </>
  );
}

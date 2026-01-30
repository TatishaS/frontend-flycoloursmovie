import { BrowserRouter, Route, Routes } from "react-router";

import { MainPage } from "./pages/Main/MainPage";
import { FilmPage } from "./pages/FilmPage/FilmPage";
import { BookPage } from "./pages/Book/BookPage";
import { FilmProvider } from "./contexts/Film/Provider";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { MainLayout } from "./layouts/MainLayout/MainLayout";

import { UserMain } from "./pages/UserMain/UserMain";
import { Page404 } from "./pages/Page404/Page404";
import { AddActivity } from "./components/AddActivity/AddActivity";
import { AdminLayout } from "./layouts/AdminLayout/AdminLayout";
import { AllBookings } from "./components/AllBookings/AllBookings";
import { Dashboard } from "./components/Dashboard/Dashboard";

export function App() {
  return (
    <>
      <FilmProvider>
        <div className="container mx-auto">
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route index element={<MainPage />} />
                <Route path="films/:filmId" element={<FilmPage />} />
                <Route path="films/new" element={<AddActivity />} />
                <Route path="films" element={<FilmsList />} />
                <Route path="book" element={<BookPage />} />
                <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="bookings" element={<AllBookings />} />
                  <Route path="activities" element={<AllBookings />} />
                  <Route path="create" element={<AddActivity />} />
                </Route>
                <Route path="user/:userId" element={<UserMain />} />
                <Route path="404" element={<Page404 />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </div>
      </FilmProvider>
    </>
  );
}

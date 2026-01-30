import React from "react";
import { useDispatch } from "react-redux";
import { FilmsList } from "@/components/FilmsList/FilmsList";
import { MainSlider } from "@/components/MainSlider/MainSlider";
import { FilmProvider } from "@/contexts/Film/Provider";
import axiosInstance from "@/config/axios";
import { fetchActivities } from "@/redux/slices/activitySlice";
import { registerUser } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector, type RootState } from "@/redux/store";

export const MainPage: React.FC = () => {
  const dispatch: any = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    /*   const getActivities = async () => {
      const response = await axiosInstance.get("/activities");
      console.log(response.data);
    };
    getActivities(); */
    //dispatch(fetchActivities);
    /*     dispatch(
      registerUser({
        email: "Lera@test.ru",
        fullname: "Lera",
        password: "ww1254776874Zaa*",
        group: "4a",
      }),
    );
    console.log(user); */
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-emerald-700">MainPage</h2>
      {/* <p>{user.fullname}</p>
      <p>{user.group}</p> */}
      <MainSlider />
      <FilmsList />
    </div>
  );
};

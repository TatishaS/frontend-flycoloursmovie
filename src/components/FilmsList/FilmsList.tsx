import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { fetchActivities } from "@/redux/slices/activitySlice";

import FilmSkeleton from "@/components/Film/FilmSkeleton";
import { useAppDispatch, useAppSelector, type RootState } from "@/redux/store";
import { Film } from "@/components/Film";
import { StatusEnum } from "@/redux/slices/activitySlice";

export const FilmsList: React.FC = () => {
  const { activities, status } = useAppSelector(
    (state: RootState) => state.activities
  );

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchActivities());
  }, []);
  console.log(activities);
  const isLoadingActivities = status === StatusEnum.LOADING;
  console.log(isLoadingActivities);

  /* const context = useContext(FilmContext);

  if (!context || !context.films) return; */
  //if (!activities) return;

  return (
    <>
      <p>Количество фильмов: {activities?.length}</p>
      <div className="title">Все фильмы</div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Boolean(activities) &&
          activities?.map((activity) => (
            <div key={activity._id}>
              <Link to={`/films/${activity._id}`}>
                <Film film={activity} />
              </Link>
            </div>
          ))}
        {isLoadingActivities &&
          !activities &&
          Array(4)
            .fill(0)
            .map((item, index) => <FilmSkeleton key={index} />)}
      </div>
    </>
  );
};

// Interface

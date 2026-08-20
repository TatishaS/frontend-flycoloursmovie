import React from "react";
import { Link } from "react-router";
import { fetchActivities } from "@/redux/slices/activitySlice";

import ActivitySkeleton from "@/components/Activity/ActivitySkeleton";
import { useAppDispatch, useAppSelector, type RootState } from "@/redux/store";
import { Activity } from "@/components/Activity";
import { StatusEnum } from "@/redux/slices/activitySlice";

export const ActivitiesList: React.FC = () => {
  const { activities, status } = useAppSelector(
    (state: RootState) => state.activities,
  );

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  const isLoadingActivities = status === StatusEnum.LOADING;
  const isError = status === StatusEnum.ERROR;

  return (
    <>
      <p>Количество мероприятий: {activities?.length}</p>
      <h2 className="title" data-testid="activities-title">
        Все мероприятия
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {isLoadingActivities &&
          Array(4)
            .fill(0)
            .map((_item, index) => <ActivitySkeleton key={index} />)}
        {!isLoadingActivities && isError && (
          <>
            <p data-testid="error-message">Ошибка при загрузке мероприятий</p>
          </>
        )}
        {!isLoadingActivities && !isError && activities.length === 0 && (
          <>
            <p data-testid="no-activities-message">
              Доступных мероприятий не найдено
            </p>
          </>
        )}
        {!isLoadingActivities &&
          !isError &&
          activities.length > 0 &&
          activities?.map((activity) => (
            <div key={activity._id}>
              <Link to={`/films/${activity._id}`}>
                <Activity activity={activity} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

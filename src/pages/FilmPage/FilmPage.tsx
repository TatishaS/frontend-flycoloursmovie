import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useContext } from "react";
import { FilmProvider } from "@/contexts/Film/Provider";
import { FilmContext } from "@/contexts/Film/context.ts";
import { ActivitiesList } from "@/components/ActivitiesList/ActivitiesList";
import { FilmFull } from "@/components/FilmFull";
import FilmSkeleton from "@/components/Activity/ActivitySkeleton";
import { useAppSelector, type RootState } from "@/redux/store";
import FilmFullSkeleton from "@/components/FilmFull/FilmFullSkeleton";

export const FilmPage = () => {
  //const { activities } = useAppSelector((state: RootState) => state.activities);
  const { filmId } = useParams();

  return (
    <>
      {filmId && <FilmFull filmId={filmId} />}
      <ActivitiesList />
    </>
  );
};

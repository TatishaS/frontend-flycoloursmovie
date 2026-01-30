import { useState } from "react";
import type { ReactNode } from "react";

import { type IFilm } from "./context";
import { FilmContext } from "./context";

const filmList = [
  {
    id: "25071",
    title: "2+1",
    description: "Добрый фильм про дружбу",
    subtitles: "русский",
    original: "английский",
    duration: 92,
    imageUrl: "./assets/film-1.jpg",
  },
  {
    id: "25072",
    title: "Interstellar",
    description: "Фильм про мечту о космосе",
    subtitles: "английский",
    original: "английский",
    duration: 85,
    imageUrl: "./assets/film-1.jpg",
  },
  {
    id: "25073",
    title: "Tres Metres",
    description: "Романтический испанский фильм лав стори",
    subtitles: "русский",
    original: "испанский",
    duration: 103,
    imageUrl: "./assets/film-1.jpg",
  },
];

export const FilmProvider = ({ children }: { children?: ReactNode }) => {
  const [films, setFilms] = useState<IFilm[]>(() => {
    return filmList ? filmList : [];
  });

  return (
    <FilmContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmContext.Provider>
  );
};

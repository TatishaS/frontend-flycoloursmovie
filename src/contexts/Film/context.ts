import { createContext } from "react";

export interface IFilm {
  id: string;
  title: string;
  description: string;
  subtitles: string;
  original: string;
  duration: number;
  imageUrl: string;
}

interface IFilmContext {
  films?: IFilm[];
  setFilms?: (films: IFilm[] | []) => void;
}

export const FilmContext = createContext<null | IFilmContext>(null);

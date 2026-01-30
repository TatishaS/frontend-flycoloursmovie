import { type IFilm } from "@/contexts/Film/context";
import React from "react";
import axios from "axios";
import { type IActivity } from "@/redux/slices/activitySlice";
import clockIcon from "@/assets/icon-clock.svg";
import FilmFullSkeleton from "./FilmFullSkeleton";

interface FilmProps {
  filmId: string;
}

export const FilmFull: React.FC<FilmProps> = ({ filmId }) => {
  const [data, setData] = React.useState<IActivity | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  //const filmsObj = useContext(FilmContext);
  //if (!filmsObj || !filmsObj.films) return;

  React.useEffect(() => {
    console.log(`${import.meta.env.VITE_BASE_URL}/activities/${filmId}`);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/activities/${filmId}` || "")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.warn(error);
        alert("Ошибка при получении Activity");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filmId]);

  if (isLoading) return <FilmFullSkeleton />;

  if (!data)
    return (
      <>
        <h2>Информация о фильме не найдена</h2>
      </>
    );

  const {
    title,
    description,
    duration,
    originalLanguage: original,
    subtitlesLanguage: subtitles,
    imageUrl,
    free,
    price,
  } = data;

  return (
    <div className="pt-16 relative highlight mb-8">
      <div className="lg:grid grid-cols-4 gap-12">
        <div className="relative z-3">
          <img
            src={imageUrl}
            alt={`Фильм ${title}`}
            className="object-cover rounded-xl overflow-hidden h-[400px]"
          />
        </div>
        <div className="py-4 col-span-3 pr-16 flex flex-col justify-between">
          <div>
            <span className="block uppercase font-semibold text-lg mb-4 text-borders">
              {original}
            </span>
            <h6 className="text-4xl font-bold max-w-80 leading-[1.25] mb-2">
              {title}
            </h6>
            <span className="block">
              <span className="icon_clock"></span>
              {duration} мин.
            </span>
            <p className="mb-4">{description}</p>
            <p>Язык оригинала: {original}</p>
            <p>Язык субтитров: {subtitles}</p>
            <p className="mb-4">Цена: {free ? "Бесплатно" : price}</p>
          </div>
          <div>
            <a className="btn btn__accent lg:w-auto w-full font-bold">
              Занять место
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

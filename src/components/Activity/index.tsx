import movieImage from "@/assets/film-1.jpg";
import type { IActivity } from "@/redux/slices/activitySlice";
interface ActivityProps {
  activity: IActivity;
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
  const { title, duration, originalLanguage, subtitlesLanguage, imageUrl } =
    activity;

  return (
    <div className="rounded-xl bg-white p-4">
      <div>
        <div className="mb-8">
          <img
            src={imageUrl}
            className="object-cover overflow-hidden  lg:mb-0 h-50 rounded-md w-full"
          />
        </div>
        <h6>{title}</h6>
        <p>{duration} мин.</p>
        <p className="text-slate-700">Язык оригинала: {originalLanguage}</p>
        <p className="text-slate-700">Язык субтитров: {subtitlesLanguage}</p>
      </div>
    </div>
  );
};

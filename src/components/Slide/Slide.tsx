import movieImage from "@/assets/film-2.webp";

export const Slide: React.FC = () => {
  return (
    <div className="p-12">
      <div className="lg:grid grid-cols-3 gap-12">
        <div className="w-full relative">
          <img
            src={movieImage}
            className="w-full h-full object-cover rounded-xl overflow-hidden mb-8 lg:mb-0 min-h-[200px] max-h-[400px]"
          />
          <span className="inline-block absolute top-2 right-2 text-white bg-zinc-600 rounded-sm opacity-80 p-1">
            96 мин.
          </span>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-8">Интерстеллар</h2>

          <p className="mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, ab
            odit voluptatum illo soluta corporis, laboriosam voluptates officiis
            assumenda architecto perspiciatis error dolor dignissimos.
            Reprehenderit, sint fugiat. Lorem ipsum dolor Lorem ipsum dolor
          </p>
          <span className="text-xs block mb-4">Язык оригинала: Английский</span>
          <span className="text-xs block mb-4">Язык субтитров: Английский</span>

          <p className="text-xs block mb-12">
            В стоимость билета включены: пицца, снэки, чай, лимонады
          </p>
          <a className="btn btn__accent lg:w-auto w-full font-bold">
            Занять место
          </a>
        </div>
      </div>
    </div>
  );
};

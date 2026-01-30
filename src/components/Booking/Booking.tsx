import movieImage from "@/assets/film-2.webp";

export const Booking: React.FC = () => {
  return (
    <div className="w-full mb-10 rounded-xl bg-card-bg md:pr-12 p-8">
      <div className="md:grid md:grid-cols-6 md:gap-4">
        <img
          src={movieImage}
          className="w-full h-full md:w-[300px] md:h-[200px] object-cover rounded-xl overflow-hidden mb-8 lg:mb-0 min-h-[200px] max-h-[400px]"
        />
        <div className="col-span-5 md:grid grid-cols-2 justify-between md:gap-4">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl mb-4">Бронирование №121212</h3>
            <p className="font-bold mb-4">Мероприятие: Интерстеллар</p>

            <div className="flex items-center">
              <span>21 октября 2025</span>
              <span className="w-2 h-2 rounded-full bg-borders inline-block mx-2"></span>
              <span>18:30</span>
            </div>
          </div>
          <div className="md:text-right">
            <span className="block mb-10 font-bold text-2xl">2100 руб.</span>

            <span className="block mb-4">
              Количество билетов: <span className="font-bold">3</span>
            </span>
            <h6>Места:</h6>
            <span className="block font-bold">1 ряд, 20 место</span>
            <span className="block font-bold">1 ряд, 21 место</span>
            <span className="block font-bold">1 ряд, 22 место</span>
          </div>
        </div>
      </div>
    </div>
  );
};

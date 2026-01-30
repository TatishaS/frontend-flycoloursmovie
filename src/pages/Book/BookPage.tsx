import { Hall } from "@/components/Hall/Hall";

export const BookPage: React.FC = () => {
  return (
    <div>
      <h2>Бронирование</h2>
      <Hall />
      <div className="container flex justify-center items-center">
        <a className="bg-salad rounded-3xl py-2 px-4 text-xs ">Забронировать</a>
      </div>
    </div>
  );
};

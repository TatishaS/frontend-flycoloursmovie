import styles from "./styles.module.css";

export const UserProfile: React.FC = () => {
  return (
    <div
      className={
        styles.profile +
        " profile rounded-xl bg-card-bg p-4 mb-24 relative overflow-hidden"
      }
    >
      <h2 className="font-bold text-2xl mb-8">Иван Иванов</h2>
      <span className="block mb-4">Группа: SM103</span>
      <span className="block mb-4">fio@fio.ru</span>
      <button className="btn btn__secondary lg:w-auto w-full font-bold mb-4">
        Изменить данные
      </button>
    </div>
  );
};

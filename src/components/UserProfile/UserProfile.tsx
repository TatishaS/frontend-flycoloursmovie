import { useAppSelector, type RootState } from "@/redux/store";
import styles from "./styles.module.css";

export const UserProfile: React.FC = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <div
      className={
        styles.profile +
        " profile rounded-xl bg-card-bg p-4 mb-24 relative overflow-hidden"
      }
    >
      <h2 className="font-bold text-2xl mb-8">{user?.fullname}</h2>
      <span className="block mb-4">
        Группа: {user?.group ? user?.group : "Не указана"}
      </span>
      <span className="block mb-4">{user?.email}</span>
      <button className="btn btn__secondary lg:w-auto w-full font-bold mb-4">
        Изменить данные
      </button>
    </div>
  );
};

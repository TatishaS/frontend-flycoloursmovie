import { UserProfile } from "@/components/UserProfile/UserProfile.js";
import { BookingList } from "@/components/BookingList/BookingList.js";

export const UserMain: React.FC = () => {
  return (
    <div className="px-4 md:px-20 max-w-[1200px] mx-auto">
      <UserProfile />
      <h2 className="font-bold text-2xl mb-8">Мои бронирования</h2>
      <BookingList />
    </div>
  );
};

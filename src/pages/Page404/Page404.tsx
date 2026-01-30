import error404 from "@/assets/404.jpg";

export const Page404: React.FC = () => {
  return (
    <div className="flex justify-center align-middle">
      <img src={error404} width="400" className="w-1/6" />
    </div>
  );
};

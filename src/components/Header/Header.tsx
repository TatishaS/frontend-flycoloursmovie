import React from "react";
import { Link } from "react-router";
import logoImage from "@/assets/flymovieclub_logo_transparent.png";
import { Modal } from "../Modal/Modal";
import { AuthModal } from "../AuthModal/AuthModal";
import { SignupModal } from "../SignupModal/SignupModal";
import { useAppSelector } from "@/redux/store";
import { checkIsAuth } from "@/redux/slices/authSlice";

export const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [isRegisterModal, setIsRegisterModal] = React.useState<boolean>(false);
  const isAuth = useAppSelector(checkIsAuth);
  return (
    <>
      <header className="mb-4 sticky top-0 left-0 right-0 bg-[#e6ecff]">
        <div className="container mx-auto py-5 px-5 md:px-10">
          <nav className="nav flex justify-between items-center">
            <div className="header__logo">
              <Link to="/">
                <img
                  src={logoImage}
                  alt="FlyMovieClub logo"
                  width="200"
                  height="200"
                  className="header__logo-img"
                />
              </Link>
            </div>
            <ul className="header__menu-list flex justify-center gap-8 p-4 bg-[#EFF3FF] rounded-4xl mx-12">
              <li className="header__menu-item">
                <Link to="/films" className="text-salmon">
                  Фильмы
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="/book">Бронирование</Link>
              </li>
              {isAuth && (
                <li className="header__menu-item">
                  <Link to="/mybookings">Мои бронирования</Link>
                </li>
              )}
            </ul>
            {/* {user && <span>{user.name}</span>} */}
            <div className="flex items-center">
              {isAuth && <a className="block mx-4">Регина С.</a>}
              <button
                className="rounded-4xl bg-[#f4c7c9] font-semibold py-2 px-4"
                onClick={() => {
                  return setIsModalVisible(!isModalVisible);
                }}
              >
                {isAuth ? "Выйти" : "Войти"}
              </button>
            </div>
          </nav>
        </div>
        {isModalVisible && (
          <Modal
            onClose={() => {
              setIsRegisterModal(false);
              setIsModalVisible(false);
            }}
          >
            {isRegisterModal ? (
              <SignupModal />
            ) : (
              <AuthModal onOpenRegister={() => setIsRegisterModal(true)} />
            )}
          </Modal>
        )}
      </header>
    </>
  );
};

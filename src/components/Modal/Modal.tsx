import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

export const Modal = ({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: any;
}) => {
  return createPortal(
    <>
      <div
        className="overlay z-1 fixed top-0 right-0 left-0 bottom-0 bg-black opacity-70"
        onClick={onClose}
      ></div>
      <div className="z-2 bg-white p-10 rounded-3xl absolute top-[50%] left-[50%] -translate-[50%] w-full md:w-md">
        <div className={styles.modal_close} onClick={onClose}></div>
        {children}
      </div>
    </>,
    document.body,
  );
};

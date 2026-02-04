import { authUser, type ILoginData } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { useForm, type SubmitHandler } from "react-hook-form";

interface AuthModalProps {
  onOpenRegister: () => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  onOpenRegister,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: {
      email: "regina@regina.ru",
      password: "123456Nt!",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginData> = (values) => {
    console.log(values);
    dispatch(authUser(values));
    onClose();
  };

  return (
    <div>
      <h2 className="modal__title text-xl font-bold text-center mb-4">
        Войти в аккаунт
      </h2>
      <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="modal__form-field mb-4">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-control"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", { required: "Укажите email" })}
          />
          <span className="text-red-500 block">{errors.email?.message}</span>
        </p>
        <p className="modal__form-field mb-8">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password", { required: "Укажите пароль" })}
          />
          <span className="text-red-500 block">{errors.password?.message}</span>
        </p>
        <button className="btn btn__accent block w-full mb-4" type="submit">
          Войти
        </button>
      </form>
      <p>Еще не зарегистрированы?</p>
      <button
        className="font-bold cursor-pointer underline mb-4 hover:opacity-80"
        onClick={onOpenRegister}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

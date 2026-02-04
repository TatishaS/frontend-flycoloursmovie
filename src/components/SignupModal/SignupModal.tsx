import { registerUser } from "@/redux/slices/authSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IUserData } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";

export const SignupModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    defaultValues: {
      fullname: "",
      group: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IUserData> = (values) => {
    console.log(values);
    dispatch(registerUser(values));
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-4">Регистрация</h2>
      <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="modal__form-field mb-4">
          <label className="form-label" htmlFor="fullname">
            Имя и фамилия
          </label>
          <input
            className="form-control"
            type="text"
            aria-invalid={errors.fullname ? "true" : "false"}
            {...register("fullname", { required: "Укажите имя и фамилию" })}
          />
          <span className="text-red-500 block">{errors.fullname?.message}</span>
        </p>
        <p className="modal__form-field mb-4">
          <label className="form-label" htmlFor="group">
            Группа
          </label>
          <input
            className="form-control"
            type="text"
            aria-invalid={errors.group ? "true" : "false"}
            {...register("group", { required: "Укажите группу" })}
          />
          <span className="text-red-500 block">{errors.group?.message}</span>
        </p>
        <p className="modal__form-field mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", { required: "Укажите email" })}
          />
          <span className="text-red-500 block">{errors.email?.message}</span>
        </p>
        <p className="modal__form-field mb-4">
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
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

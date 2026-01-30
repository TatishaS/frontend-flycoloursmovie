export const AuthModal: React.FC<{ onOpenRegister: () => void }> = ({
  onOpenRegister,
}) => {
  return (
    <div>
      <h2 className="modal__title text-xl font-bold text-center mb-4">
        Войти в аккаунт
      </h2>
      <form className="modal__form">
        <p className="modal__form-field mb-4">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input className="form-control" type="email" name="email" required />
        </p>
        <p className="modal__form-field mb-8">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            required
          />
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

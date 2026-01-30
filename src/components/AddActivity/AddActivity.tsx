export const AddActivity: React.FC = () => {
  return (
    <div className="lg:w-1/2 w-full mx-auto px-4 lg:px-8">
      <h2 className="modal__title text-xl font-bold text-center mb-4">
        Добавить событие
      </h2>
      <form className="modal__form">
        <p className="modal__form-field mb-4 font-bold">
          <label className="form-label" htmlFor="title">
            Название события
          </label>
          <input className="form-control" type="text" name="title" required />
        </p>
        <p className="modal__form-field mb-8 font-bold">
          <label className="form-label" htmlFor="description">
            Описание события
          </label>
          <textarea
            className="form-control resize-none"
            name="description"
            rows={5}
            required
          ></textarea>
        </p>
        <div className="modal__form-field mb-8 font-bold">
          <p>Ссылка на изображение</p>

          <input
            className="editor__file-input visually-hidden"
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
          />
          <input className="editor__img-input" type="text" required />

          <label htmlFor="image"></label>
        </div>
        <div className="w-full grid gap-8 lg:grid-cols-2">
          <p className="modal__form-field mb-4">
            <label
              className="form-label w-1/2 font-bold"
              htmlFor="originalLanguage"
            >
              Язык оригинала
            </label>
            <input
              className="form-control"
              type="text"
              name="originalLanguage"
            />
          </p>
          <p className="modal__form-field mb-4 ">
            <label className="form-label font-bold" htmlFor="subtitlesLanguage">
              Язык субтитров
            </label>
            <input
              className="form-control"
              type="text"
              name="subtitlesLanguage"
            />
          </p>
        </div>
        <div className="w-full grid gap-8 grid-cols-2 lg:grid-cols-4 items-end">
          <p className="modal__form-field mb-4">
            <label className="form-label font-bold" htmlFor="date">
              Дата
            </label>
            <input className="form-control" type="text" name="date" />
          </p>
          <p className="modal__form-field mb-4">
            <label className="form-label font-bold" htmlFor="time">
              Время
            </label>
            <input className="form-control" type="text" name="time" />
          </p>
          <p className="modal__form-field mb-4">
            <label className="form-label font-bold" htmlFor="duration">
              Продолжительность, мин.
            </label>
            <input className="form-control" type="text" name="duration" />
          </p>
        </div>

        <p className="modal__form-field mb-4">
          <label className="form-label font-bold" htmlFor="isFree">
            Бесплатное
          </label>
          <input
            className="mr-auto text-2xl"
            type="checkbox"
            name="isFree"
            checked
          />
        </p>
        <div className="w-full grid gap-8 grid-cols-2 lg:grid-cols-4">
          <p className="modal__form-field mb-4 ">
            <label className="form-label font-bold" htmlFor="price">
              Цена, руб.
            </label>
            <input className="form-control" type="text" name="price" />
          </p>
        </div>

        <span className="block">Добавил: Иван Иванов</span>
        <button className="btn btn__accent block mb-4" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
};

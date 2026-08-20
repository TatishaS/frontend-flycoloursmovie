import { render, screen } from "@testing-library/react";
import events from "@testing-library/user-event";
import { App } from "@/App";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

describe("Header", () => {
  it("renders", async () => {
    const app = (
      <Provider store={store}>
        <App />
      </Provider>
    );

    const { getByTestId } = render(app);
    const loginBtn = getByTestId("button-login");

    await events.click(loginBtn);
    const modal = getByTestId("modal-signin");
    const modalHeader = modal.textContent;
    expect(modalHeader).toBe("Войти в аккаунт");
  });
});

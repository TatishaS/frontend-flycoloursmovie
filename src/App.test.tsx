import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import { App } from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

describe("App", () => {
  it("renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});

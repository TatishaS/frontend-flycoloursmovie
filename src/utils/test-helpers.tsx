import React, { JSX, PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import activityReducer from "@/redux/slices/activitySlice";
import authReducer from "@/redux/slices/authSlice";

// 1. Сначала объединяем редьюсеры в один корень
const rootReducer = combineReducers({
  activities: activityReducer,
  auth: authReducer,
});

// 2. Типизируем состояние на основе корневого редьюсера
type RootState = ReturnType<typeof rootReducer>;

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  // Используем DeepPartial (или просто Partial), чтобы можно было передать кусок стейта
  preloadedState?: Partial<RootState>;
  store?: ReturnType<typeof configureStore>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // 3. Передаем уже готовый rootReducer
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

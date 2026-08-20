import { screen, waitFor } from "@testing-library/react";

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { ActivitiesList } from "../ActivitiesList";
import { renderWithProviders } from "@/utils/test-helpers";
import type { IActivity } from "@/redux/slices/activitySlice";

const ACTIVITIES_URL = `${import.meta.env.VITE_BASE_URL}/activities`;

const mockActivities: IActivity[] = [
  {
    _id: "2",
    user: "123",
    type: "movie",
    title: "Farewell to arms",
    description: "Good movie",
    imageUrl: ".1447.jpg",
    originalLanguage: "English",
    subtitlesLanguage: "English",
    date: "30-09-2025",
    time: "19:00",
    free: true,
    price: 0,
    duration: 55,
    occupiedSeats: [],
  },
  {
    _id: "3",
    user: "123",
    type: "movie",
    title: "1+1",
    description: "Interesting",
    imageUrl: ".1448.jpg",
    originalLanguage: "French",
    subtitlesLanguage: "French",
    date: "01-09-2026",
    time: "19:00",
    free: true,
    price: 0,
    duration: 120,
    occupiedSeats: [],
  },
];

const interstellarActivity: IActivity = {
  _id: "123",
  user: "123",
  type: "movie",
  title: "Interstellar",
  description: "Good movie",
  imageUrl: ".1447.jpg",
  originalLanguage: "English",
  subtitlesLanguage: "English",
  date: "30-09-2025",
  time: "19:00",
  free: true,
  price: 0,
  duration: 90,
  occupiedSeats: [],
};

export const server = setupServer(
  http.get(ACTIVITIES_URL, () => HttpResponse.json(mockActivities)),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ActivitiesList", () => {
  it("renders title and fetches activities on mount", async () => {
    renderWithProviders(<ActivitiesList />);

    expect(screen.getByTestId("activities-title")).toBeInTheDocument();

    expect(await screen.findByText(/Farewell to arms/i)).toBeInTheDocument();
    expect(screen.getByText(/1\+1/i)).toBeInTheDocument();
  });

  it("shows empty message when API returns no activities", async () => {
    server.use(
      http.get(ACTIVITIES_URL, () => HttpResponse.json([])),
    );

    renderWithProviders(<ActivitiesList />);

    expect(await screen.findByTestId("no-activities-message")).toHaveTextContent(
      "Доступных мероприятий не найдено",
    );

    await waitFor(() => {
      expect(screen.queryAllByTestId("activity-skeleton")).toHaveLength(0);
    });
  });

  it("renders activities returned from API", async () => {
    server.use(
      http.get(ACTIVITIES_URL, () => HttpResponse.json([interstellarActivity])),
    );

    renderWithProviders(<ActivitiesList />);

    expect(await screen.findByText(/Interstellar/i)).toBeInTheDocument();
    expect(
      screen.queryByTestId("no-activities-message"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });

  it("shows error message when API request fails", async () => {
    server.use(
      http.get(ACTIVITIES_URL, () => HttpResponse.error()),
    );

    renderWithProviders(<ActivitiesList />);

    expect(await screen.findByTestId("error-message")).toBeInTheDocument();
    expect(
      screen.queryByTestId("no-activities-message"),
    ).not.toBeInTheDocument();
  });
});

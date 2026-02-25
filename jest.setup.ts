import "@testing-library/jest-dom";
import { TextEncoder } from "node:util";

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

// Для Swiper 11 - Поддержка ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Для Swiper 11 - Поддержка анимаций
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Моки для Swiper
jest.mock("swiper/modules", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Virtual: jest.fn(),
  A11y: jest.fn(),
  Autoplay: jest.fn(),
}));
jest.mock("swiper/react", () => ({
  SwiperSlide: jest.fn(),
  useSwiper: jest.fn(),
  Swiper: jest.fn(),
}));

jest.mock("swiper/css", () => "");
jest.mock("swiper/css/pagination", () => "");
jest.mock("swiper/css/navigation", () => "");
jest.mock("swiper/css/autoplay", () => "");

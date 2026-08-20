import "@testing-library/jest-dom";
import { vi } from "vitest";
import { TextEncoder, TextDecoder } from "node:util";

Object.defineProperties(global, {
  TextEncoder: { value: TextEncoder, writable: true },
  TextDecoder: { value: TextDecoder, writable: true },
});
// Полифил BroadcastChannel (обязателен для MSW v2)
if (!(global as any).BroadcastChannel) {
  const { BroadcastChannel } = require("node:worker_threads");
  (global as any).BroadcastChannel = BroadcastChannel;
}
// Для Swiper 11 - Поддержка ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
// Для Swiper 11 - Поддержка анимаций
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Моки для Swiper
vi.mock("swiper/modules", () => ({
  Navigation: vi.fn(),
  Pagination: vi.fn(),
  Virtual: vi.fn(),
  A11y: vi.fn(),
  Autoplay: vi.fn(),
}));
vi.mock("swiper/react", () => ({
  SwiperSlide: vi.fn(),
  useSwiper: vi.fn(),
  Swiper: vi.fn(),
}));

vi.mock("swiper/css", () => ({ default: {} }));
vi.mock("swiper/css/pagination", () => ({ default: {} }));
vi.mock("swiper/css/navigation", () => ({ default: {} }));
vi.mock("swiper/css/autoplay", () => ({ default: {} }));

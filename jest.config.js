const config = {
  rootDir: "./",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|webp|jpg)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    // swiper 11 uses .mjs
    "^swiper/react$": "<rootDir>/node_modules/swiper/swiper-react.mjs",
    "^swiper/modules$": "<rootDir>/node_modules/swiper/modules/index.mjs",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mjs", "json"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "babel-jest",
    "^.+\\.[t|j]s?$": "babel-jest",
  },
  transformIgnorePatterns: [
    // Allow Jest to transform Swiper (ignore node_modules by default, but Swiper needs transpilation)
    "/node_modules/(?!swiper|ssr-window|dom7).+\\.js$",
  ],
};

export default config;

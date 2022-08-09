const ROOT_DIR = "<rootDir>";
const ROOT_SRC = `${ROOT_DIR}/src`;
const FULL_ROOT_SRC = `${ROOT_SRC}/$1`;
module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"]
  },
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  setupFilesAfterEnv: [`${ROOT_DIR}/tests/setup.js`],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
    "^~/(.*)$": FULL_ROOT_SRC,
    "^~~/(.*)$": FULL_ROOT_SRC,
    "^@/(.*)$": FULL_ROOT_SRC,
    "^@@/(.*)$": FULL_ROOT_SRC,
    "^@./(.*)$": `${ROOT_DIR}/$1`,
    "@meta(.*)$": `${ROOT_DIR}/meta/$1`,
    "@root(.*)$": `${ROOT_DIR}/$1`,
    "^@components(.*)$": `${ROOT_SRC}/components$1`,
    "^@pages(.*)$": `${ROOT_SRC}/pages$1`,
    "^@scripts(.*)$": `${ROOT_SRC}/assets/scripts$1`,
    "^@stores(.*)$": `${ROOT_DIR}/stores/$1`
  },
  preset: "ts-jest",
  // testMatch: ["<rootDir>/__tests__/__unit__/**/*.spec.js"],
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(js|ts)$": "@sucrase/jest-plugin",
    "^.+\\.(vue)$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },

  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.js", "!src/App.vue"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80
    }
  }
};

/**
 * 🃏 Jest configuration file
 * https://jestjs.io/docs/27.x/getting-started
 */
 const ROOT_DIR = "<rootDir>"
 const ROOT_SRC = `${ROOT_DIR}/src`
 const FULL_ROOT_SRC = `${ROOT_SRC}/$1`
 module.exports = {
     moduleFileExtensions: ["js", "json", "vue"],
     moduleNameMapper: {
         ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
         "^~/(.*)$": FULL_ROOT_SRC,
         "^~~/(.*)$": FULL_ROOT_SRC,
         "^@/(.*)$": FULL_ROOT_SRC,
         "^@@/(.*)$": FULL_ROOT_SRC,
         "^@./(.*)$": `${ROOT_DIR}/$1`,
         "^@root(.*)$": FULL_ROOT_SRC,
         "^@components(.*)$": `${ROOT_SRC}/components$1`,
         "^@pages(.*)$": `${ROOT_SRC}/pages$1`,
         "^@scripts(.*)$": `${ROOT_SRC}/assets/scripts$1`,
         "^@stores(.*)$": `${ROOT_DIR}/stores/$1`
     },
     transform: {
         "^.+\\.js$": "babel-jest",
         "^.+\\.vue$": "@vue/vue3-jest"
 
     },
     snapshotSerializers: [`${ROOT_DIR}/node_modules/jest-serializer-vue`],
     testEnvironment: "jsdom",
     setupFilesAfterEnv: [`${ROOT_DIR}/jest.config.js`]
 }
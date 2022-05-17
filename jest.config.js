const ROOT_DIR_SRC = "<rootDir>/src/$1"
module.exports = {
    moduleFileExtensions: ["js", "json", "vue"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
        "identity-obj-proxy",
        "^~/(.*)$": ROOT_DIR_SRC,
        "^~~/(.*)$": ROOT_DIR_SRC,
        "^@/(.*)$": ROOT_DIR_SRC,
        "^@@/(.*)$": ROOT_DIR_SRC,
        "^@./(.*)$": "<rootDir>/$1"
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest"
        
    },
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.config.js']
}
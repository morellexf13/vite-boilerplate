# ⚡️ Vite Tuto

<div align="center">

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/morellexf26/vite-tuto/blob/main/LICENSE)
[![Version](https://img.shields.io/github/v/tag/morellexf26/vite-tuto?label=%20&style=for-the-badge)](https://github.com/morellexf26/vite-tuto/releases)
[![Build](https://img.shields.io/github/workflow/status/morellexf26/vite-tuto/Build?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/morellexf26/vite-tuto/actions?query=workflow%3Abuild) 
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

<img src=".github/images/built-with.svg">
<img src=".github/images/uses-js.svg">

</div>

<img alt='Website' src="./src/assets/screenshots/login.png" />

This boilerplate helps you to start creating your own Vue 3 projects using ⚡️Vite, 🍍Pinia, 🚏Vuex Router, 📡 Axios, 🤹🏻‍♂️ Jest and more amazing tools.

Tuto is the short of Tutorial and the best/easier way to start creating a SPA using the latest versions of the best frameworks out there! 🤩

<br>

## 👨🏻‍🏫  Basic topics

- [What is Vue?](https://vuejs.org/guide/introduction.html#what-is-vue)
- [Single-File Components](https://vuejs.org/guide/introduction.html#single-file-components)
- [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals)
- [Computed Properties](https://vuejs.org/guide/essentials/computed.html#computed-properties)
- [Props Declaration](https://vuejs.org/guide/components/props.html#props-declaration)
- [Slots](https://vuejs.org/guide/components/slots.html#slots)
- [Performance Overview](https://vuejs.org/guide/best-practices/performance.html#overview)
- [Pinia - What is a Store?](https://pinia.vuejs.org/getting-started.html#what-is-a-store)
- [Pinia - State](https://pinia.vuejs.org/core-concepts/state.html#state)
- [Pinia - Getters](https://pinia.vuejs.org/core-concepts/getters.html#getters)
- [Pinia - Actions](https://pinia.vuejs.org/core-concepts/actions.html)
- [Vuex Router - Getting Started](https://router.vuejs.org/guide/#getting-started)
- [Vuex Router - Navigation Guard](https://router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards)
- [Jest Unit Tests (🇪🇸)](https://medium.com/@agustinmorelle01/las-7-claves-del-%C3%A9xito-tests-unitarios-de-frontend-vue-js-y-jest-28988ae561ac)

<br>

## 💎 Features

- Basic login/logout state definition using Pinia.
- Basic Store configured using Pinia and Persist Plugin (stores/index.js).
- Basic "Home" and "Login" pages defined (src/pages/).
- Basic "Title" and "Button" components defined using slots and custom properties. 
- Basic router configuration defined (/router.js).
- Basic GET request using Axios (Spotify Tracker API). This request needs an [Authorization Bearer Token ](https://developer.spotify.com/console/get-users-currently-playing-track/). For security purposes you can just set this token on environment files.
- Environment file example.
- Jest configuration defined.
- Unit test suite per each defined page, API test included 😎.
- Path alias defined (vite.config.js).
- GitHub actions workflow example defined.

<br>

## 🏛 Folder Structure

```
vite-tuto
├─ .gitignore
├─ LICENSE
├─ README.md
├─ babel.config.json
├─ index.html
├─ jest.config.js // 🃏 Unit tests configuration
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ router.js // 🧭 Handle page routes
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ index.css // 🎨 Main stylesheet file
│  │  ├─ logo.png
│  │  ├─ screenshots
│  │  │  └─ login.png
│  │  └─ scripts
│  │     ├─ api.js // 📡 Handle api calls
│  │     └─ session.js // 👦🏻 Handle user session
│  ├─ components
│  │  ├─ Button.vue
│  │  ├─ MainSection.vue
│  │  ├─ Title.vue
│  │  └─ UserSessionLink.vue
│  ├─ main.js // 🪴 Application's entry point
│  └─ pages
│     ├─ Home.vue
│     ├─ Login.vue
│     └─ SpotifyTracker.vue
├─ stores
│  └─ index.js // 💾 Save general state of the app
├─ tests // 🃏 Unit tests
│  ├─ routerMock.js
│  └─ unit
│     ├─ spotify.spec.js
│     └─ user-session.spec.js
└─ vite.config.js // 📦 Bundler setup, alias and more

```

<br>

## 🏁 Start
Create your project directly from GitHub based
on tuto boilerplate right now:

<a href="https://github.com/morellexf26/vite-tuto/generate"> 
<img src=".github/images/generate-your-project.svg"/>
</a>

<br>

## 🏃🏼‍♂️ Run

1. `npm install`
2. `npm run dev`


<br>

## 🧪 Run tests

1. `npm run test`
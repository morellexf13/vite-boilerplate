<div align="center">
  <h1>
    <br/>
    ⚡️
    <br />
    <br />
    Vue Bolt
    <br />
    <br />
  </h1>
  <sup>
    <br />
   A Vue 3 Starter Boilerplate with Vue Router 4, Pinia 2, Vite 5, Sass, Axios, Jest 29 and More.</em>
    <br />
    <br /

[![Build status](https://img.shields.io/github/actions/workflow/status/morellexf13/vue-bolt/build.yml?branch=main&label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/morellexf13/vue-bolt/actions/workflows/build.yml)
[![Version](https://img.shields.io/github/v/tag/morellexf13/vue-bolt?label=%20&style=for-the-badge)](https://github.com/morellexf13/vue-bolt/releases)
[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/morellexf13/vue-bolt/blob/main/LICENSE)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/vue-bolt?label=%20&style=for-the-badge)](https://www.npmjs.com/package/vue-bolt)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://vuejs.org)

  </sup>
</div>

<img alt='Website' src="./src/assets/screenshots/login.png" />

<br>

Create a cutting-edge website using the latest technologies available. Vue Bolt, an all-inclusive solution, will provide you with essential features such as framework integration, state management, routing, API communication, unit testing, and much more.

## 👨🏻‍🏫 Learn More

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
- [Jest Unit Tests (Spanish only)](https://medium.com/@agustinmorelle01/las-7-claves-del-%C3%A9xito-tests-unitarios-de-frontend-vue-js-y-jest-28988ae561ac)

<br>

## 🌈 Features

- Basic login/logout state definition using Pinia.
- Basic Store configured using Pinia and Persist Plugin (stores/index.js).
- Basic "Home" and "Login" pages defined (src/pages/).
- Basic "Title" and "Button" components defined using slots and custom properties.
- Basic router configuration defined (/router.js).
- Basic GET request using Axios (Spotify Tracker API). This request needs an [Authorization Bearer Token ](https://developer.spotify.com/console/get-users-currently-playing-track/). For security purposes you can just set this token on environment files.
- Environment file example.
- Jest configuration defined.
- Unit test suite per each defined page, API test included.
- Path alias defined (vite.config.js).
- GitHub actions workflow example defined.

<br>

## 🏛 Folder Structure

```
vue-bolt
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

## 🚀 Install

Install it locally in your project

```bash
npm install

npm run dev
```

<br>

## 🧪 Unit tests

```
npm run test
```

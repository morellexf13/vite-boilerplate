<template>
  <div class="container">
    <div class="hello">
      <span>⚡️</span>
      <h1>
        {{ !userIsLoggedIn ? "Welcome to Quick Vue!" : "You are now logged in" }}
      </h1>
      <p v-if="!userIsLoggedIn">
        This boilerplate helps you to start creating
        <br>
        your own Vue 3 projects using amazing tools!
      </p>
      <ul>
        <li v-if="userIsLoggedIn && $route.name != 'spotify'">
          <a v-on:click="navigateToSpotify">Spotify Tracker</a>
        </li>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import * as session from '@scripts/session'
export default {
  name: "MainSection",
  props: {
    msg: String
  },
  data() {
    return {
      userIsLoggedIn: session.userIsLoggedIn(this.$pinia)
    }
  },
  methods: {
    navigateToSpotify() {
      // 🔄 Redirect to Spotify page
      this.$router.push("/spotify")
    }
  }
}
</script>


<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

span {
  font-size: 92px;
}
</style>

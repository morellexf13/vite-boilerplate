<template>
    <h1>You are in the Home page</h1>
    <button v-on:click="goToSpotifyTracker()">Spotify Tracker</button> &nbsp;
    <button v-on:click="logout()">Logout</button>
</template>

<script>
import { useStore } from '../../stores/index'
export default {
  name: "Home",
  methods: {
    logout() {
      // 🚪 Set userLoggedIn state to false
      const store = useStore(this.$pinia)
      store.setUserLoggedOut()
      // 🔄 Redirect to Login
      this.$router.push('/login')
    },
    goToSpotifyTracker() {
      this.$router.push('/spotify')
    }
  }
};
</script>

<style>
 
</style>
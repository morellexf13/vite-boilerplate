<template>
    <h1>You are in the Login page</h1>
    <button v-on:click="login()">Login</button>
</template>

<script>
import { useStore } from '../../stores/index'
export default {
  name: "Login",
  methods: {
    login() {
      // 🚪 Set userLoggedIn state to true
      const store = useStore(this.$pinia)
      store.setUserLoggedIn()
      // 🔄 Redirect to Home
      this.$router.push('/')
    }
  }
};
</script>

<style>

</style>
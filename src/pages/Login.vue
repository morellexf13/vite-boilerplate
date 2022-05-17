<template>
    <Title>Login</Title>
    <Button id="btn-login" v-on:click="login()">Login</Button>
</template>

<script>
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'
import { useStore } from '@./stores/index'
export default {
  name: "Login",
  components: { 
    Title,
    Button
  },
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
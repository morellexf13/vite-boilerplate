<template>
    <Title>Home</Title>
    <Button v-on:click="goToSpotifyTracker()">Spotify Tracker</Button> &nbsp;
    <Button id="btn-logout" v-on:click="logout()">Logout</Button>
</template>

<script>
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'
import { useStore } from '@./stores/index'
export default {
    name: "Home",
    components: { 
      Title,
      Button
    },
    methods: {
        logout() {
            // 🚪 Set userLoggedIn state to false
            const store = useStore(this.$pinia);
            store.setUserLoggedOut();
            // 🔄 Redirect to Login
            this.$router.push("/login");
        },
        goToSpotifyTracker() {
            this.$router.push("/spotify");
        }
    }
};
</script>

<style>
 
</style>
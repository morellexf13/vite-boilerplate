<template>
    <Title>Spotify Tracker</Title>
    <div v-if="isPlaying">
      <img :src="imgSrc">
      <h3> 🎸 You are currently listening to {{song}} by {{artist}}</h3>
    </div>
    <div v-else>
      <h3>▶️ Open and play something on Spotify to see changes</h3>
    </div>
</template>

<script>
import * as api from '@/assets/scripts/api'
import Title from '@/components/Title.vue'
export default {
  name: "SpotifyTracker",
  components: { 
    Title
  },
  mounted () {
    api.getUsersCurrentlyPlayingTrack()
    .then(item => {
        this.isPlaying = true
        this.song = item.name
        this.artist = item.artists[0].name
        this.imgSrc = item.album.images[0].url
      })
      .catch(() => {
        this.isPlaying = false
      })
  },
  data() {
    return {
      isPlaying: false,
      song: '',
      imgSrc: '',
      artist: ''
    }
  }
};
</script>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>
<script setup lang="ts">
import Documate from './../components/Documate.vue'

const APIURL = 'https://dppbqvuvmi.us.aircode-test.run/aka'

</script>

<template>
  <div>
    <Documate :endpoint="APIURL" />
  </div>
</template>

<style scoped>
.logo {
  height: 2em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

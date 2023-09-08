<script setup lang="ts">
import Documate from './../components/Documate.vue'

const APIURL = 'https://xqtb17uycg.us.aircode.run/ask'

const quickActions = [
  'What is Documate?',
  'How do I get started with Documate?',
  'How do I run Documate with my documents?',
]

</script>

<template>
  <div>
    <!-- replace props with your own -->
    <Documate :endpoint="APIURL" :predefinedQuestions="quickActions" :placeholder="`Ask your docs a question...`" :buttonLabel="`Ask AI`" />
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

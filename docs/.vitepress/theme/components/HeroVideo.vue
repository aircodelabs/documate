<script setup>
import { onMounted, ref } from 'vue'

const showVideo = ref(true)

onMounted(() => {
  if (/MicroMessenger/i.test(window.navigator.userAgent)) {
    showVideo.value = false
  }
})
</script>

<template>
  <div class="flex items-center min-[960px]:translate-x-8 min-[960px]:translate-y-8 xl:pl-8 mt-10 min-[960px]:mt-0">
    <div class="overflow-hidden rounded-lg shadow-lg">
      <video
        v-if="showVideo"
        autoplay loop muted playsinline
        class="translate-x-[1px] rounded-lg">
        <source src="/site-screen-record.webm" type="video/webm">
        <source src="/site-screen-record.mp4" type="video/mp4">
      </video>
      <img
        v-else
        class="translate-x-[1px] rounded-lg"
        src="/site-screen-image.jpeg"
      />
    </div>
  </div>
</template>

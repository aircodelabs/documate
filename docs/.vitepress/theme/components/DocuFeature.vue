<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import FeaturePattern from './FeaturePattern.vue';
import { ref } from 'vue';

defineProps<{
  icon?: DefaultTheme.FeatureIcon
  title: string
  details?: string
  link?: string
}>()

const mouseX = ref(0)
const mouseY = ref(0)

function onMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event
  const { left, top } = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
  mouseX.value = clientX - left
  mouseY.value = clientY - top
}
</script>

<template>
  <div
    @mousemove="onMouseMove"
    class="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
  >
    <FeaturePattern :mouse-x="mouseX" :mouse-y="mouseY" />
    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
    <div class="relative rounded-2xl px-4 pb-4 pt-16">
      <VPImage
        v-if="typeof icon === 'object'"
        :image="icon"
        :alt="icon.alt"
        :height="icon.height || 48"
        :width="icon.width || 48"
      />
      <div v-else-if="icon" class="icon" v-html="icon"></div>
      <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
        <span class="absolute inset-0 rounded-2xl" ></span>
        {{title}}
      </h3>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {{ details }}
      </p>
    </div>
  </div>
</template>

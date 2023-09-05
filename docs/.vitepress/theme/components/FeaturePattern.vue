<script setup lang="ts">
import { computed } from 'vue'
import GridPattern from './GridPattern.vue'

const props = defineProps<{
  mouseX: number
  mouseY: number
}>()

const patterns: Array<{
  y: number
  squares: Array<[x: number, y: number]>
}> = [{
  y: 16,
  squares: [
    [0, 1],
    [1, 3],
  ],
}, {
  y: -6,
  squares: [
    [-1, 2],
    [1, 3],
  ],
}, {
  y: 32,
  squares: [
    [0, 2],
    [1, 4],
  ],
}, {
  y: 22,
  squares: [[0, 1]],
}]

const pattern = computed(() => patterns[Math.floor(Math.random() * patterns.length)])

const style = computed<{ maskImage: string, WebKitMaskImage: string}>(
  () => {
    const maskImage = `radial-gradient(180px at ${props.mouseX}px ${props.mouseY}px, white, transparent)`
    return { maskImage, WebKitMaskImage: maskImage }
  }
)
</script>

<template>
  <div class="pointer-events-none">
    <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
      <GridPattern
        :width="72"
        :height="56"
        x="50%"
        :y="pattern.y"
        :squares="pattern.squares"
        class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
      />
    </div>
    <div
      class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
      :style="style"></div>
    <div
      class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
      :style="style"
    >
      <GridPattern
        :width="72"
        :height="56"
        x="50%"
        :y="pattern.y"
        :squares="pattern.squares"
        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
      />
    </div>
  </div>
</template>

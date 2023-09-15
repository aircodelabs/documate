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
  <div class="pointer-events-none" :data-y="pattern.y">
    <div class="absolute inset-0 rounded-xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
      <ClientOnly>
        <GridPattern
          :width="72"
          :height="56"
          x="50%"
          :y="pattern.y"
          :squares="pattern.squares"
          class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
        />
      </ClientOnly>
    </div>
    <div
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#38BDF8]/10 to-[#0EA5E9]/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#38BDF8]/15 dark:to-[#0EA5E9]/15"
      :style="style"></div>
    <div
      class="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
      :style="style"
    >
      <ClientOnly>
        <GridPattern
          :width="72"
          :height="56"
          x="50%"
          :y="pattern.y"
          :squares="pattern.squares"
          class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
        />
      </ClientOnly>
    </div>
  </div>
</template>

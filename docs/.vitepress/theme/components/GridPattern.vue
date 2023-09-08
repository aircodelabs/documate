<script setup lang="ts">
defineProps<{
  width: number
  height: number
  x: string | number
  y: string | number
  squares: Array<[x: number, y: number]>
}>()

const id = `grid-pattern-${Math.random().toString(36).slice(2)}`
</script>

<template>
  <svg aria-hidden="true">
    <defs>
      <pattern :id="id" :width="width" :height="height" patternUnits="userSpaceOnUse" :x="x" :y="y">
        <path :d="`M.5 ${height}V.5H${width}`" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" :strokeWidth="0" :fill="`url(#${id})`" />
    <svg v-if="squares" :x="x" :y="y" class="overflow-visible">
      <rect strokeWidth="0" v-for="(square, index) in squares" :key="`${square[0]}-${square[1]}`" :width="width + 1"
        :height="height + 1" :x="square[0] * width" :y="square[1] * height" />
    </svg>
  </svg>
</template>

<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/vue/24/outline'
import FeaturePattern from './FeaturePattern.vue';
import { ref } from 'vue';

defineProps<{
  icon?: 'rocket-launch' | 'shield-check' | 'adjustments-horizontal'
  title: string
  details?: string
  link?: string
  rel?: string
}>()

const mouseX = ref(0)
const mouseY = ref(0)

function onMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event
  const { left, top } = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
  mouseX.value = clientX - left
  mouseY.value = clientY - top
}

const iconsMap = {
  'rocket-launch': RocketLaunchIcon,
  'shield-check': ShieldCheckIcon,
  'adjustments-horizontal': AdjustmentsHorizontalIcon
}
</script>

<template>
  <div
    @mousemove="onMouseMove"
    class="group relative h-full flex rounded-xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
  >
    <FeaturePattern :mouse-x="mouseX" :mouse-y="mouseY" />
    <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
    <div class="relative rounded-xl px-4 pb-8 pt-16">
      <div v-if="icon" class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-sky-500/10 dark:group-hover:ring-sky-600">
        <component :is="iconsMap[icon]" class="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-sky-400/10 dark:group-hover:stroke-sky-500" />
      </div>
      <h3 class="mt-4 text-base font-semibold leading-7">
        <VPLink
          :href="link"
          :rel="rel"
          :no-icon="true"
          :tag="link ? 'a' : 'div'"
        >
          <span class="absolute inset-0 rounded-xl" ></span>
          {{ title }}
        </VPLink>
      </h3>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {{ details }}
      </p>
    </div>
  </div>
</template>

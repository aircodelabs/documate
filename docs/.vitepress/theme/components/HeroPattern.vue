<script setup>
import GridPattern from './GridPattern.vue'
</script>

<template>
<div class="hero-pattern">
  <div class="hero-pattern-container">
    <div class="hero-pattern-grid-container">
      <GridPattern
        :width="72"
        :height="56"
        :x="-12"
        :y="4"
        :squares="[
          [4, 3],
          [2, 1],
          [7, 3],
          [10, 6],
        ]"
        class="hero-pattern-grid"
      />
    </div>
    <svg
      viewBox="0 0 1113 440"
      aria-hidden="true"
      class="hero-pattern-fade"
    >
      <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
    </svg>
  </div>
</div>
</template>

<style>
.hero-pattern {
  position: absolute;
  inset: 0px;
  z-index: -10;
  margin-left: 0;
  margin-right: 0;
  max-width: none;
  overflow: hidden;
}

.hero-pattern-container {
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -38rem;
  height: 25rem;
  width: 81.25rem;
}

.dark .hero-pattern-container {
  -webkit-mask-image: linear-gradient(white, transparent);
  mask-image: linear-gradient(white, transparent);
}

.hero-pattern-grid-container {
  position: absolute;
  inset: 0px;
  background-image: linear-gradient(to right, #36b49f, #DBFF75);
  opacity: 0.4;
  -webkit-mask-image: radial-gradient(farthest-side at top,white,transparent);
  mask-image: radial-gradient(farthest-side at top,white,transparent);
}

.dark .hero-pattern-grid-container {
  background-image: linear-gradient(to right, rgb(54 180 159 / 0.3), rgb(219 255 117 / 0.3));
  opacity: 1;
}

.hero-pattern-grid {
  position: absolute;
  left: 0;
  right: 0;
  top: -50%;
  bottom: -50%;
  height: 200%;
  width: 100%;
  transform: skewY(-18deg);
  fill: rgba(0, 0, 0, 0.4);
  stroke: rgba(0, 0, 0, 0.5);
  mix-blend-mode: overlay;
}

.dark .hero-pattern-grid {
  fill: rgba(255, 255, 255, 0.025);
  stroke: rgba(255, 255, 255, 0.05);
}

.hero-pattern-fade {
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -19rem;
  width: 69.5625rem;
  fill: white;
  filter: blur(26px);
}

.dark .hero-pattern-fade {
  display: none;
}
</style>

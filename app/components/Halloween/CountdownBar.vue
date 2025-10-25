<template>
  <div class="fixed top-0 left-0 right-0 z-50 bg-blood-red py-3 px-4 text-center shadow-lg">
    <p class="text-lime-ghost font-bold text-sm md:text-base uppercase tracking-wide">
      🎃 THE SEASON OF TERROR ENDS IN: <span class="font-mono">{{ countdown }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const countdown = ref("02h 56m 25s")

onMounted(() => {
  // apenas visual - não real
  setInterval(() => {
    const now = new Date()
    countdown.value = now.toLocaleTimeString()
  }, 1000)
})
</script>

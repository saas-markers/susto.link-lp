<template>
  <section class="py-24 px-6 bg-gradient-to-b from-black-deep to-card text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-pumpkin mb-10 drop-shadow-glow-pumpkin">
      Why Everyone’s Talking About Susto.Link
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(feature, i) in features"
        :key="i"
        class="bg-card rounded-2xl p-8 shadow-card-dark border border-pumpkin/20 hover:border-pumpkin/40 transition-all hover:scale-105"
      >
        <div class="text-5xl mb-4 animate-float">{{ feature.icon }}</div>
        <h3 class="text-xl font-semibold text-foreground mb-3">{{ feature.title }}</h3>
        <p class="text-muted-foreground">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "😱",
    title: "Scare & Go Viral",
    desc: "Create your scary link and watch your friends scream (and share).",
  },
  {
    icon: "⚡",
    title: "Instant Setup",
    desc: "No signup, no waiting. In seconds, you’re haunting the internet.",
  },
  {
    icon: "🎭",
    title: "Customize the Prank",
    desc: "Choose your theme — ghost, clown, zombie — and make it personal.",
  },
]
</script>

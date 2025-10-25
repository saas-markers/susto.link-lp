<template>
  <section class="py-24 px-6 bg-black text-center border-t border-pumpkin/20">
    <h2 class="text-4xl md:text-5xl font-bold text-pumpkin mb-16">
      How It Works (So Simple It’s Scary)
    </h2>

    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="bg-card rounded-2xl p-8 border border-pumpkin/30 hover:border-pumpkin/50 transition-all hover:shadow-glow-pumpkin"
      >
        <div
          class="w-16 h-16 mx-auto mb-6 rounded-full bg-pumpkin text-black-deep flex items-center justify-center text-3xl font-bold shadow-glow-pumpkin"
        >
          {{ index + 1 }}
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">{{ step.title }}</h3>
        <p class="text-muted-foreground">{{ step.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Choose Your Scare Style",
    desc: "Select from our terrifying templates — ghosts, zombies, or full jump scares.",
  },
  {
    title: "Generate Your Link",
    desc: "Click once, and boom — your viral Halloween prank is ready.",
  },
  {
    title: "Share & Enjoy the Chaos",
    desc: "Send it to friends and watch the horror unfold. 😈",
  },
]
</script>

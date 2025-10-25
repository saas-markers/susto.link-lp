<template>
  <section class="py-24 px-6 bg-gradient-to-b from-card to-black-deep text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-pumpkin mb-14">
      Real Reactions from Brave Souls
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(test, i) in testimonials"
        :key="i"
        class="bg-black-deep border border-pumpkin/20 rounded-2xl p-6 shadow-card-dark hover:border-pumpkin/40 transition-all hover:scale-[1.02]"
      >
        <p class="text-lg italic text-foreground mb-4">“{{ test.quote }}”</p>
        <div class="flex items-center justify-center space-x-3">
          <img
            :src="test.avatar"
            :alt="test.name"
            class="w-10 h-10 rounded-full border-2 border-pumpkin"
          />
          <div class="text-left">
            <p class="font-bold text-lime-ghost">{{ test.name }}</p>
            <p class="text-sm text-muted-foreground">{{ test.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <button
        class="inline-flex items-center justify-center gap-2 h-12 bg-pumpkin hover:bg-pumpkin/90 text-black-deep font-bold text-lg px-8 py-7 rounded-xl shadow-glow-pumpkin animate-pulse-glow transition-all hover:scale-105"
      >
        👻 CREATE MY HALLOWEEN LINK NOW
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: "My boyfriend screamed so loud the neighbors knocked on the door 😂",
    name: "Lara Silva",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote: "Went viral on my college group chat within 10 minutes. Insane!",
    name: "Carlos M.",
    role: "Student",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    quote: "10/10 would prank again. Easy, hilarious, and worth every cent.",
    name: "Rafaela T.",
    role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/100?img=24",
  },
]
</script>

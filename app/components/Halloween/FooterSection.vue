<template>
  <footer class="bg-black-deep border-t border-pumpkin/20 py-12 px-6 text-center">
    <div class="max-w-6xl mx-auto flex flex-col items-center space-y-6">
      <!-- <img src="/logo.svg" alt="Susto.Link" class="w-40 opacity-90 hover:opacity-100 transition" /> -->

      <nav class="flex space-x-6 text-muted-foreground">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          class="hover:text-pumpkin transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>

      <div class="flex items-center justify-center space-x-5 text-2xl text-pumpkin">
        <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-lime-ghost transition">
          🕸️
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="hover:text-lime-ghost transition">
          🦇
        </a>
        <a href="https://tiktok.com" target="_blank" aria-label="TikTok" class="hover:text-lime-ghost transition">
          🎭
        </a>
      </div>

      <p class="text-sm text-muted-foreground">
        © {{ new Date().getFullYear() }} Susto.Link — Crafted with 💀 by
        <a href="https://tmgrowth.com.br" target="_blank" class="text-pumpkin hover:text-lime-ghost transition">
          Saas Makers
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { name: "How It Works", href: "#steps" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Support", href: "#" },
  { name: "Privacy Policy", href: "#" },
]
</script>

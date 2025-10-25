<template>
  <section class="py-20 px-4 bg-gradient-hero">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display text-blood-red mb-8">SEUS AMIGOS ESTÃO ENTEDIADOS NESTE HALLOWEEN?
        </h2>
        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-card p-6 rounded-xl border border-blood-red/50 shadow-card-dark"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-circle-x w-10 h-10 text-blood-red mx-auto mb-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            <p class="text-foreground font-medium">As pegadinhas antigas não funcionam mais.</p>
          </div>
          <div class="bg-card p-6 rounded-xl border border-blood-red/50 shadow-card-dark"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-circle-x w-10 h-10 text-blood-red mx-auto mb-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            <p class="text-foreground font-medium">Pare de parecer amador.</p>
          </div>
          <div class="bg-card p-6 rounded-xl border border-blood-red/50 shadow-card-dark"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-circle-x w-10 h-10 text-blood-red mx-auto mb-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            <p class="text-foreground font-medium">Diversão garantida com uma ferramenta limpa e profissional.</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3 class="text-3xl md:text-4xl font-display text-lime-ghost mb-12">A FÓRMULA SIMPLES PARA O SUCESSO VIRAL NO
          HALLOWEEN:</h3>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="relative">
            <div
              class="bg-card p-8 rounded-2xl border-2 border-pumpkin shadow-glow-pumpkin hover:scale-105 transition-transform">
              <div class="text-6xl mb-4">🎨</div>
              <div
                class="w-12 h-12 bg-pumpkin rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl text-black-deep">
                1</div>
              <p class="text-foreground font-bold text-lg">ESCOLHA O TEMPLATE MAIS CRIATIVO E ASSUSTADOR</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-4 text-4xl text-pumpkin animate-pulse">→</div>
          </div>
          <div class="relative">
            <div
              class="bg-card p-8 rounded-2xl border-2 border-pumpkin shadow-glow-pumpkin hover:scale-105 transition-transform">
              <div class="text-6xl mb-4">⚡</div>
              <div
                class="w-12 h-12 bg-pumpkin rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl text-black-deep">
                2</div>
              <p class="text-foreground font-bold text-lg">Pague rápido (R$ 5) e Gere seu Link de Susto Único</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-4 text-4xl text-pumpkin animate-pulse">→</div>
          </div>
          <div class="relative">
            <div
              class="bg-card p-8 rounded-2xl border-2 border-pumpkin shadow-glow-pumpkin hover:scale-105 transition-transform">
              <div class="text-6xl mb-4">😂</div>
              <div
                class="w-12 h-12 bg-pumpkin rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl text-black-deep">
                3</div>
              <p class="text-foreground font-bold text-lg">Compartilhe e espere pelo "EU TE ODEIO" mais engraçado deste
                Halloween</p>
            </div>
          </div>
        </div>
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

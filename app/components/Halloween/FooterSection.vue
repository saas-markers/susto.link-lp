<template>
  <footer class="bg-black-deep border-t border-pumpkin/30 py-8 px-4">
    <div class="max-w-6xl mx-auto text-center space-y-4">
      <div class="flex items-center justify-center gap-2 text-2xl font-display text-pumpkin">
        <span>🎃</span><span>SUSTO.LINK</span></div>
      <p class="text-muted-foreground text-sm">© 2025 Susto.Link. Todos os direitos reservados. Feliz Halloween! 🦇</p>
      <div class="flex items-center justify-center gap-6 text-sm text-foreground"><a href="#privacy"
          class="hover:text-pumpkin transition-colors">Política de Privacidade</a><span
          class="text-muted-foreground">•</span><a href="#terms" class="hover:text-pumpkin transition-colors">Termos de
          Uso</a><span class="text-muted-foreground">•</span><a href="#support"
          class="hover:text-lime-ghost transition-colors">Contato para Suporte</a></div>
      <div class="pt-4 text-xs text-muted-foreground">Feito com 💀 e 🎃 para as melhores pegadinhas de Halloween</div>
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

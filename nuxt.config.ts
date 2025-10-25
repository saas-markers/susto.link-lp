import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Susto.Link — Halloween Viral Generator 🎃",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { name: "description", content: "Crie links assustadores e viralize neste Halloween!" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "author", content: "saas-makers" },
        { name: "keywords", content: "Halloween, viral, links, generator" },
        { property: "og:title", content: "Susto.Link — Halloween Viral Generator 🎃" },
        { property: "og:description", content: "Crie links assustadores e viralize neste Halloween!" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Susto.Link — Halloween Viral Generator 🎃" },
        { name: "twitter:description", content: "Crie links assustadores e viralize neste Halloween!" },
        { name: "twitter:image", content: "/og-image.png" }

      ],
    },
  },
  runtimeConfig: {
    urlBase: process.env.URL_BASE_API || 'localhost:3000/demoTiti'
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  // image: {
  //   provider: 'cloudinary',
  //   cloudinary: {
  //     baseURL: 'https://res.cloudinary.com/dhysfkiem/image/upload',
  //     modifiers: {
  //       quality: 'auto:best'
  //     }
  //   },
  //   quality: 80,
  //   format: ['webp', 'avif'],
  //   screens: {
  //     xs: 480,
  //     sm: 640,
  //     md: 768,
  //     lg: 1280
  //   }
  // }
})
<script setup lang="ts">
import type { Project } from "@/components/ProjectCard/types";
const Button = defineAsyncComponent(() => import("@/components/ui/button/Button.vue"));
import { Linkedin, Github, Download } from "lucide-vue-next";

const projects: Project[] = [
	{
		title: "Checkout da Play55",
		description: "Criador e mantenedor do checkout white label da Play55, a maior plataforma de sorteios legalizados no Brasil.",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto1",
			redirectType: "_blank"
		}
	},
	{
		title: "Projeto Exemplo 2",
		description: "Descrição do Projeto Exemplo 2",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto2"
		}
	},
	{
		title: "Projeto Exemplo 3",
		description: "Descrição do Projeto Exemplo 3",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto3",
			redirectType: "_self"
		}
	},
	{
		title: "Projeto Exemplo 2",
		description: "Descrição do Projeto Exemplo 2",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto2"
		}
	},
	{
		title: "Projeto Exemplo 3",
		description: "Descrição do Projeto Exemplo 3",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto3",
			redirectType: "_self"
		}
	},
	{
		title: "Projeto Exemplo 2",
		description: "Descrição do Projeto Exemplo 2",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto2"
		}
	},
	{
		title: "Projeto Exemplo 3",
		description: "Descrição do Projeto Exemplo 3",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto3",
			redirectType: "_self"
		}
	},
	{
		title: "Projeto Exemplo 2",
		description: "Descrição do Projeto Exemplo 2",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto2"
		}
	},
	{
		title: "Projeto Exemplo 3",
		description: "Descrição do Projeto Exemplo 3",
		projectCover: "https://via.placeholder.com/150",
		projectData: {
			url: "https://example.com/projeto3",
			redirectType: "_self"
		}
	},
];

const tituloh1 = ref(null);
onMounted(async () => {
	const { gsap } = await import("gsap");
	gsap.to(tituloh1.value, { duration: 0.6, opacity: 1 });
});
</script>

<template>
	<div class="bg-background text-foreground">
		<Header />

		<main class="pt-16">
			<section
				class="relative min-h-[calc(100vh-4rem)] text-center px-4 py-16 overflow-hidden"
			>
				<div class="opacity-0 relative z-10 max-w-4xl mx-auto" ref="tituloh1">
					<h1
						class="bgSize200 animate-gradientez text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#e46a69] to-[#4a0487]"
					>
						Transformando ideias em sites performáticos que geram resultados
					</h1>
					<h5 class="mt-6">
						Olá, visitante!
						<img
							src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f44b.gif"
							alt="Ícone animado de mão acenando"
							class="inline-block w-6 h-6"
						/>
						<br />
						Minhas redes estão logo abaixo:
					</h5>
					<!-- <p class="mt-2 max-w-[700px] mx-auto text-foreground/80 md:text-xl">
						Sou o Tiago Martins, desenvolvedor Front-end Web com especialidade
						em
						<span class="text-[#4FC08D] font-mono">Vue.js</span>
						<span> e </span>
						<span class="text-[#00DC82] font-mono">Nuxt</span> (CSR/SSR) e atuo
						em projetos de Checkout e landing pages white label otimizados.
					</p> -->
					<!-- <p class="mt-2 max-w-[700px] mx-auto text-foreground/80 md:text-xl">
						<span class="mt-4">Sólida experiência com </span>
						<span class="text-primary font-mono">TypeScript</span>,
						<span class="text-primary font-mono">Tailwind</span>, APIs
						<span class="text-primary font-mono">REST</span> e arquitetura
						<span class="text-primary font-mono">BFF</span> para criar
						aplicações modernas, rápidas e estáveis.
					</p> -->
					<div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
						<NuxtLink
							to="https://www.linkedin.com/in/tiago-henrique-pereira-martins-62a8871b5/"
						>
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-[#0072b1] cursor-pointer"
							>
								<Linkedin color="#0072b1" />
								LinkedIn
							</Button>
						</NuxtLink>
						<NuxtLink to="https://github.com/tiago-henriquem">
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-[#15191E] cursor-pointer"
							>
								<Github color="#15191E" />
								GitHub
							</Button>
						</NuxtLink>
						<NuxtLink>
							<Button
								size="lg"
								variant="outline"
								class="w-full sm:w-auto border-gray-400 cursor-pointer"
							>
								<Download color="var(--color-gray-400)" />
								Baixar CV
							</Button>
						</NuxtLink>
					</div>
				</div>
			</section>

			<!-- <LazyTechStack /> -->

			<section class="container mx-auto max-w-screen-xl px-0 py-20 md:py-32 bg-secondary">
				<h3 class="bgSize200 animate-gradientez mb-5 font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e46a69] to-[#4a0487]">Projetos em Destaque</h3>
				<LazyProjectsSection />
			</section>

			<section id="sobre" class="py-20 md:py-32">
				<div class="container mx-auto max-w-screen-xl px-4 md:px-6">
					<h2
						class="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
					>
						Sobre Mim
					</h2>
					<div class="max-w-3xl mx-auto grid gap-8 md:grid-cols-3 items-center">
						<div class="md:col-span-1 flex justify-center md:order-last">
							<div
								class="w-48 h-48 bg-secondary rounded-full flex items-center justify-center"
							>
								<span class="text-foreground/50">Sua foto aqui</span>
							</div>
						</div>
						<div
							class="md:col-span-2 text-left text-foreground/80 space-y-4 md:order-first"
						>
							<p>
								Desde cedo tive contato com computadores e fui aprendendo a
								mexer conforme a necessidade surgia. Minha paixão por jogos me
								levou a ter o primeiro contato com programação no
								<i>MTA, uma modificação do jogo GTA San Andreas para PC</i>,
								onde comecei a ter uma noção do que era possível criar.
							</p>
							<p>
								Em 2020, ingressei na faculdade de Sistemas de Informação e me
								apeguei rapidamente pelo desenvolvimento web. Hoje, aplico essa
								paixão e conhecimento como líder técnico na empresa onde
								trabalho, sempre buscando construir soluções eficientes e
								escaláveis.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>

		<LazyFooter />
	</div>
</template>

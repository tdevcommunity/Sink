<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const features = ref([
  {
    title: 'Raccourcissement d’URL',
    description: 'Réduisez vos URLs à leur longueur minimale.',
    icon: Link,
  },
  {
    title: 'Analyses',
    description: 'Suivez les statistiques de vos liens et obtenez des données pertinentes.',
    icon: AreaChart,
  },
  {
    title: 'Sans serveur',
    description: 'Déployez sans avoir besoin de serveurs traditionnels.',
    icon: ServerOff,
  },
  {
    title: 'Slug personnalisable',
    description: 'Prise en charge des slugs personnalisés.',
    icon: Paintbrush,
  },
  {
    title: 'Slug par IA',
    description: 'Utilisez l’IA pour générer des slugs.',
    icon: Sparkles,
  },
  {
    title: 'Expiration des liens',
    description: 'Définissez des dates d’expiration pour vos liens.',
    icon: Hourglass,
  },
])
</script>

<template>
  <main class="pt-16 md:py-12">
    <div class="md:pb-12">
      <h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
        Features
      </h2>
      <p class="my-8 text-lg md:mb-0 text-slate-600">
        Simple and sufficient functionality
      </p>
    </div>

    <div class="grid gap-8 md:gap-16 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in features"
        :key="item.title"
        class="flex items-start gap-4"
      >
        <div class="w-8 h-8 p-2 mt-1 bg-black rounded-full shrink-0">
          <component
            :is="item.icon"
            class="w-4 h-4 text-white"
          />
        </div>
        <div>
          <h3 class="text-lg font-semibold">
            {{ item.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-500">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<template>
  <section class="py-6 px-4 md:px-10 lg:px-20 bg-[#b2d7d7]">
    <div class="container mx-auto">
      <!-- Mobile layout -->
      <div class="md:hidden">
        <h2 class="text-lg font-bold text-[#003B39] text-center mb-2">
          {{ sectionData.title }}
        </h2>
        <p class="text-[#003B39] text-sm text-center mb-6">
          {{ sectionData.subtitle }}
        </p>

        <p class="text-xs text-[#003B39] mb-6 text-center">
          {{ sectionData.description }}
        </p>

        <div class="space-y-6">
          <div
            v-for="(ingredient, index) in sectionData.ingredients"
            :key="index"
            class="bg-[#FFFDF8] p-4 rounded-lg flex items-center space-x-4"
          >
            <div class="w-12 h-12 flex-shrink-0">
              <img :src="ingredient.icon" :alt="ingredient.name" class="w-full h-full object-contain" />
            </div>
            <div class="flex-1">
              <h3 class="text-sm font-semibold text-[#003B39] mb-1">
                {{ ingredient.name }}
              </h3>
              <p class="text-xs text-[#003B39]">{{ ingredient.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop layout -->
      <div class="hidden md:block">
        <div class="flex justify-end">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-primary-dark text-center mb-2">
              {{ sectionData.title }}
            </h2>
            <p class="text-navy text-center mb-12">
              {{ sectionData.subtitle }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="mt-12 text-left">
            <p class="text-navy mb-4">{{ sectionData.description }}</p>
          </div>
          <div
            v-for="(ingredient, index) in sectionData.ingredients"
            :key="index"
            class="bg-[#FFFDF8] p-6 rounded-lg text-center"
          >
            <div class="w-16 h-16 mx-auto mb-4">
              <img :src="ingredient.icon" :alt="ingredient.name" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-xl font-semibold text-primary-dark mb-2">
              {{ ingredient.name }}
            </h3>
            <p class="text-navy">{{ ingredient.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  sectionData: {
    type: Object,
    default: () => ({
      title: 'DAILY GUT SUPPORT MADE SIMPLE',
      subtitle: 'With powerful enzymes, probiotics, and elderberry',
      description:
        'BioDigestin™ combines the strength of nature and science to keep your digestive system functioning strong — with just one daily tablet.',
      ingredients: [
        {
          icon: '/placeholder.svg?height=64&width=64&query=digestive%20enzymes%20icon',
          name: 'DIGEZYMES',
          description: 'Helps break down proteins, fats, and proteins',
        },
        {
          icon: '/placeholder.svg?height=64&width=64&query=inulin%20icon',
          name: 'INULIN',
          description: 'Feeds your healthy gut bacteria',
        },
        {
          icon: '/placeholder.svg?height=64&width=64&query=elderberry%20icon',
          name: 'ELDERBERRY',
          description: 'Supports your immune defenses',
        },
      ],
    }),
  },
});
</script>

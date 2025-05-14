<template>
  <div>
    <!-- Desktop layout -->
    <section class="hidden md:block py-16 px-4 md:px-10 lg:px-20 bg-secondary-light">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-primary-dark text-center mb-4">
          {{ sectionData.title }}
        </h2>
        <p class="text-navy text-center mb-12">
          {{ sectionData.subtitle }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div
            v-for="(benefit, index) in sectionData.benefits"
            :key="index"
            :class="[
              benefit.highlighted ? 'bg-white text-primary border-2 border-primary ' : 'bg-primary text-white',
              'p-6 rounded-xl text-center h-full flex flex-col justify-between',
            ]"
          >
            <div>
              <div class="w-12 h-12 mx-auto mb-4">
                <img :src="benefit.icon" :alt="benefit.title" class="w-full h-full object-contain" />
              </div>
              <h3 class="text-lg font-semibold mb-2" :class="benefit.highlighted ? 'text-primary' : 'text-white'">
                {{ benefit.title }}
              </h3>
              <p :class="benefit.highlighted ? 'text-primary' : 'text-white'">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile layout -->
    <section class="md:hidden py-6 px-4 bg-[#b2d7d7]">
      <div class="container mx-auto">
        <h2 class="text-lg font-bold text-[#003B39] text-center mb-2">
          {{ sectionData.title }}
        </h2>

        <p class="text-xs text-[#003B39] text-center mb-6">
          {{ sectionData.subtitle }}
        </p>

        <div class="space-y-4">
          <div
            v-for="(benefit, index) in sectionData.benefits"
            :key="index"
            :class="[
              benefit.highlighted ? 'bg-white border border-[#01A9AC]' : 'bg-[#01A9AC]',
              'p-4 rounded-lg flex items-center space-x-3',
            ]"
          >
            <div class="w-10 h-10 flex-shrink-0">
              <img :src="benefit.icon" :alt="benefit.title" class="w-full h-full object-contain" />
            </div>
            <div class="flex-1">
              <h3 class="text-sm font-semibold mb-1" :class="benefit.highlighted ? 'text-[#01A9AC]' : 'text-white'">
                {{ benefit.title }}
              </h3>
              <p class="text-xs" :class="benefit.highlighted ? 'text-[#01A9AC]' : 'text-white'">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  sectionData: {
    type: Object,
    default: () => ({
      title: 'WHY CHOOSE BIODIGESTIN™?',
      subtitle: 'Trust BioDigestin™ for daily gut wellness — backed by science, inspired by nature',
      benefits: [
        {
          icon: '/placeholder.svg?height=48&width=48&query=natural%20icon',
          title: 'Natural Ingredients',
          description: 'Pure, plant-based formula with no artificial additives',
          highlighted: false,
        },
        {
          icon: '/placeholder.svg?height=48&width=48&query=probiotic%20icon',
          title: 'Boosts Probiotic Growth',
          description: 'Feeds your beneficial bacteria',
          highlighted: false,
        },
        {
          icon: '/placeholder.svg?height=48&width=48&query=norway%20icon',
          title: 'Made in Norway',
          description: 'With strict GMP standards',
          highlighted: false,
        },
        {
          icon: '/placeholder.svg?height=48&width=48&query=science%20icon',
          title: 'Regularly tested',
          description: 'For purity and effectiveness',
          highlighted: false,
        },
        {
          icon: '/placeholder.svg?height=48&width=48&query=free%20trial%20icon',
          title: 'IT IS FREE TO TRY FOR A WHOLE MONTH!',
          description: 'No commitment',
          highlighted: true,
        },
      ],
    }),
  },
});
</script>

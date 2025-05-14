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

        <div class="space-y-2 md:space-y-6">
          <div
            v-for="(benefit, index) in sectionData.benefits"
            :key="index"
            class="flex items-center space-x-4"
            :class="{ 'justify-end': index % 2 !== 0 }"
          >
            <div class="w-12 h-12 flex-shrink-0">
              <img :src="benefit.icon" :alt="benefit.title" class="w-full h-full object-contain" />
            </div>
            <div>
              <h3 class="text-xs md:text-sm font-semibold text-[#003B39] mb-1">
                {{ benefit.title }}
              </h3>
              <p class="text-xs text-[#003B39]">{{ benefit.description }}</p>
            </div>
          </div>

          <p class="text-xs text-[#003B39] mt-4">
            Imagine a life without constant discomfort. BioDigestin™ offers a natural, easy-to-take solution to support
            your gut — every single day.
          </p>
        </div>
      </div>

      <!-- Desktop layout -->
      <div class="hidden md:block">
        <div class="flex justify-end">
          <div>
            <h2 class="text-3xl font-bold text-primary-dark text-center mb-2">
              {{ sectionData.title }}
            </h2>
            <p class="text-navy text-center mb-12">
              {{ sectionData.subtitle }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div v-for="(benefit, index) in sectionData.benefits" :key="index" class="text-center">
            <div class="w-20 h-20 mx-auto mb-4">
              <img :src="benefit.icon" :alt="benefit.title" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-navy mb-2">
              {{ benefit.title }}
            </h3>
            <p class="text-navy-light">{{ benefit.description }}</p>
          </div>
          <div class="col-span-2 flex flex-col justify-center">
            <p class="text-navy-light">
              Imagine a life without constant discomfort. BioDigestin™ offers a natural, easy-to-take solution to
              support your gut — every single day.
            </p>
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
      title: 'GUT DISCOMFORT HOLDING YOU BACK?',
      subtitle: "You're not alone — millions struggle daily with digestion issues.",
      benefits: [
        {
          icon: '/placeholder.svg?height=80&width=80&query=stomach%20icon',
          title: 'Bloating after meals',
          description: 'Uncomfortable fullness and distension after eating',
        },
        {
          icon: '/placeholder.svg?height=80&width=80&query=gut%20icon',
          title: 'Sluggish digestion and absorption',
          description: 'Slow processing of nutrients and waste',
        },
        {
          icon: '/placeholder.svg?height=80&width=80&query=health%20icon',
          title: 'Unpredictable gut health',
          description: 'Irregular patterns affecting daily life',
        },
      ],
    }),
  },
});
</script>

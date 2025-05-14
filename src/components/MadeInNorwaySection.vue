<template>
  <div>
    <!-- Desktop layout -->
    <section class="hidden md:flex text-white items-center h-[250px] container my-12 relative overflow-hidden">
      <div
        class="mx-auto py-12 px-4 w-4/5 rounded-[32px] h-full z-10"
        style="background: linear-gradient(135.23deg, #2b2d6e 45.01%, #e4203e 99.93%)"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-3">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              {{ sectionData.title }}
            </h2>
            <p class="mb-4">{{ sectionData.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-center h-full -ml-3 mt-2 justify-center md:justify-end">
        <img src="/norway.png" :alt="sectionData.flagAlt" class="h-full" />
      </div>
    </section>

    <!-- Mobile layout -->
    <section class="flex flex-col md:hidden text-white items-center container mt-12 relative overflow-hidden">
      <div class="flex z-10 items-center h-full -mb-8 mt-2 justify-center md:justify-end">
        <img src="/norway.png" :alt="sectionData.flagAlt" class="h-full" />
      </div>
      <div
        class="mx-auto py-12 px-4 rounded-[32px] h-full"
        style="background: linear-gradient(135.23deg, #2b2d6e 45.01%, #e4203e 99.93%)"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-3">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              {{ sectionData.title }}
            </h2>
            <p class="mb-4">{{ sectionData.description }}</p>
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
      title: 'MADE IN NORWAY',
      description:
        'Made in Norway, a country renowned worldwide for the highest quality, safety, and reliability. Norway combines untouched nature with innovative expertise to create products that are sustainable, safe, and effective. This blend represents pure Nordic innovation with cutting-edge science to create a product that truly works.',
      flagImage: '/placeholder.svg?height=120&width=200&query=norwegian%20flag%20waving',
      flagAlt: 'Norwegian Flag',
    }),
  },
});
</script>

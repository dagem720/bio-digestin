<script setup lang="ts">
import type { HeroSection } from '~/types';

defineProps<{
  heroData: HeroSection;
  title: string;
}>();
</script>

<template>
  <section class="relative min-h-screen pt-20">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroData.desktop_background_image"
        alt="Background"
        class="hidden md:block w-full h-full object-cover"
      />
      <img :src="heroData.mobile_background_image" alt="Background" class="md:hidden w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <!-- Text content -->
      <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" v-html="heroData.headline" />
        <div class="text-xl md:text-2xl text-gray-700 mb-8" v-html="heroData.subheadline" />
        <a
          :href="heroData.button_link"
          class="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors"
        >
          {{ heroData.button_text }}
        </a>
      </div>

      <!-- Product image -->
      <div class="md:w-1/2">
        <img :src="heroData.product_image" :alt="title" class="w-full h-auto max-w-lg mx-auto" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-primary {
  background-color: #01a9ac;
}

.hover\:bg-primary-dark:hover {
  background-color: #018f91;
}
</style>

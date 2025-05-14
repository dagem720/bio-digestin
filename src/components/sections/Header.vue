<script setup lang="ts">
import { computed, ref } from 'vue';
import type { HeaderSection } from '~/types';

const props = defineProps<{
  headerData: HeaderSection;
  title: string;
}>();

const isMenuOpen = ref(false);

const navigationItems = computed(() => ({
  start_now: props.headerData.start_now,
  ingredients: props.headerData.ingredients,
  testimonials: props.headerData.testimonials,
}));
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <img :src="headerData.header_product_logo" :alt="title" class="h-12 w-auto" />
      </div>

      <nav class="hidden md:flex items-center space-x-8">
        <a
          v-for="(item, key) in navigationItems"
          :key="key"
          :href="item?.link"
          class="text-gray-700 hover:text-primary transition-colors"
        >
          {{ item?.link_text }}
        </a>
      </nav>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-4">
          <a
            v-for="(item, key) in navigationItems"
            :key="key"
            :href="item?.link"
            class="text-gray-700 hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            {{ item?.link_text }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.text-primary {
  color: #01a9ac;
}
</style>

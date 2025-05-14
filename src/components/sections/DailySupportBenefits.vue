<script setup lang="ts">
import type { DailySupportBenefitSection } from '~/types';

defineProps<{
  benefitsData: DailySupportBenefitSection;
}>();
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ benefitsData.headline }}
        </h2>
        <div class="text-xl text-gray-700 mb-4" v-html="benefitsData.subheadline" />
        <div class="text-lg text-gray-600" v-html="benefitsData.description" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(benefit, index) in benefitsData.daily_benefits"
          :key="index"
          class="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <img :src="benefit.image" :alt="benefit.name" class="w-24 h-24 mx-auto mb-4 object-contain" />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ benefit.name }}
          </h3>
          <p class="text-gray-600">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

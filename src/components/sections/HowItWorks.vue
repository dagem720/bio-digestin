<script setup lang="ts">
import type { HowItWorksSection } from '~/types'

defineProps<{
  howItWorksData: HowItWorksSection
}>()
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ howItWorksData.headline }}
        </h2>
        <div
          class="text-xl text-gray-700"
          v-html="howItWorksData.subheadline"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(step, index) in howItWorksData.how_it_works"
          :key="index"
          class="text-center"
        >
          <div class="relative mb-6">
            <img
              :src="step.image"
              :alt="step.name"
              class="w-32 h-32 mx-auto object-contain"
            >
            <div
              class="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
            >
              {{ index + 1 }}
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2 uppercase">
            {{ step.name }}
          </h3>
          <p class="text-gray-600">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-primary {
  background-color: #01A9AC;
}
</style>

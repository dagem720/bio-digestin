<script setup lang="ts">
import type { WhyChooseProductSection } from '~/types'

defineProps<{
  whyChooseData: WhyChooseProductSection
}>()
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ whyChooseData.headline }}
        </h2>
        <div
          class="text-xl text-gray-700"
          v-html="whyChooseData.subheadline"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in whyChooseData.why_choose_product"
          :key="index"
          class="rounded-lg p-6 text-center transition-transform hover:scale-105"
          :style="{
            backgroundColor: item.card_background_color,
            borderColor: item.card_border_color,
            borderWidth: '2px',
          }"
        >
          <img
            :src="item.image"
            :alt="item.description"
            class="w-24 h-24 mx-auto mb-4 object-contain"
          >
          <p
            class="text-lg font-medium"
            :style="{
              color: item.card_background_color === '#FFFDF8' ? '#333333' : '#FFFFFF',
            }"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

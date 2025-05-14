<script setup lang="ts">
import type { FooterSection } from '~/types'

defineProps<{
  footerData: FooterSection
}>()
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Contact information -->
        <div class="mb-8">
          <div
            class="text-lg mb-4"
            v-html="footerData.first_heading"
          />
          <div
            class="text-lg"
            v-html="footerData.second_heading"
          />
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-6">
          <a
            :href="footerData.imprint.imprint_link"
            class="text-gray-300 hover:text-white transition-colors"
          >
            {{ footerData.imprint.imprint_button_text }}
          </a>
          <a
            :href="footerData.privacy_policy.privacy_link"
            class="text-gray-300 hover:text-white transition-colors"
          >
            {{ footerData.privacy_policy.privacy_button_text }}
          </a>
          <a
            :href="footerData.terms_of_service.terms_link"
            class="text-gray-300 hover:text-white transition-colors"
          >
            {{ footerData.terms_of_service.terms_button_text }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

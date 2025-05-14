<script setup lang="ts">
import type { OriginTrustBadgeSection } from '~/types'

defineProps<{
  trustData: OriginTrustBadgeSection
}>()
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Flag and signature -->
          <div class="md:w-1/3">
            <img
              :src="trustData.flag_image"
              alt="Norwegian Flag"
              class="w-full h-auto mb-4"
            >
            <img
              :src="trustData.signature_image"
              alt="Signature"
              class="w-full h-auto"
            >
          </div>

          <!-- Text content -->
          <div class="md:w-2/3 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              {{ trustData.heading }}
            </h2>
            <div
              class="text-lg text-gray-700"
              v-html="trustData.body_text"
            />

            <!-- Trust badge (if available) -->
            <div v-if="trustData.trusted_badge_image" class="mt-8">
              <img
                :src="trustData.trusted_badge_image"
                :alt="trustData.trusted_badge_text || 'Trust Badge'"
                class="hidden md:block max-w-full h-auto"
              >
              <img
                v-if="trustData.trusted_badge_image_mobile"
                :src="trustData.trusted_badge_image_mobile"
                :alt="trustData.trusted_badge_text || 'Trust Badge'"
                class="md:hidden max-w-full h-auto"
              >
              <a
                v-if="trustData.trusted_badge_pdf_url"
                :href="trustData.trusted_badge_pdf_url"
                class="inline-block mt-4 text-primary hover:text-primary-dark transition-colors"
              >
                {{ trustData.trusted_badge_pdf_button_text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: #01A9AC;
}

.hover\:text-primary-dark:hover {
  color: #018F91;
}
</style>

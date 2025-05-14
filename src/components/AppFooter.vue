<template>
  <footer class="bg-navy text-white py-8 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">
            {{ footerData.contactTitle }}
          </h3>
          <p class="mb-2">{{ footerData.contactInfo }}</p>
          <p>{{ footerData.email }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">
            {{ footerData.supportTitle }}
          </h3>
          <p class="mb-2">{{ footerData.supportInfo }}</p>
          <p>{{ footerData.phone }}</p>
        </div>
      </div>

      <div
        class="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
      >
        <div class="mb-4 md:mb-0">
          <NuxtLink
            v-for="(link, index) in footerData.links"
            :key="index"
            :to="link.url"
            class="text-sm text-gray-300 hover:text-white mr-4"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
        <div class="text-sm text-gray-300">
          {{ footerData.copyright }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  footerData: {
    type: Object,
    default: () => ({
      contactTitle: "For inquiries, please contact us at:",
      contactInfo: "info@biodigestin.com",
      email: "support@biodigestin.com",
      supportTitle: "You can contact our support at:",
      supportInfo: "Tel: +44 (0)20 3948 226",
      phone: "Monday to Friday, 9am - 5pm",
      links: [
        { text: "Terms of use", url: "/terms" },
        { text: "Privacy", url: "/privacy" },
        { text: "Privacy Policy", url: "/privacy-policy" },
      ],
      copyright: "© 2023 BioDigestin. All rights reserved.",
    }),
  },
});
</script>

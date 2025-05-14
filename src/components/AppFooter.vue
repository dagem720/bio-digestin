<template>
  <footer class="bg-[#00605F] text-white py-6 md:py-8 px-4">
    <div class="container mx-auto">
      <!-- Mobile layout -->
      <div class="md:hidden flex flex-col space-y-5">
        <div class="flex items-start space-x-4">
          <div class="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#4ECDC4]"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <p class="text-sm">{{ footerData.contactTitle }}</p>
            <p class="text-sm">{{ footerData.contactInfo }}</p>
            <p class="text-sm">{{ footerData.email }}</p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <div class="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#4ECDC4]"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <div>
            <p class="text-sm">{{ footerData.supportTitle }}</p>
            <p class="text-sm">{{ footerData.supportInfo }}</p>
            <p class="text-sm">{{ footerData.phone }}</p>
          </div>
        </div>

        <div class="flex flex-col items-center space-y-4 pt-4">
          <NuxtLink
            v-for="(link, index) in footerData.links"
            :key="index"
            :to="link.url"
            class="text-[#B2D7D7] hover:text-white text-lg"
          >
            {{ link.text }}
          </NuxtLink>
        </div>

        <div class="text-center text-sm text-[#B2D7D7] mt-4">
          {{ footerData.copyright }}
        </div>
      </div>

      <!-- Desktop layout -->
      <div class="hidden md:block">
        <div class="flex justify-center gap-x-10 items-start">
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#4ECDC4]"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <div>
              <p class="text-sm">{{ footerData.contactTitle }}</p>
              <p class="text-sm">{{ footerData.contactInfo }}</p>
              <p class="text-sm">{{ footerData.email }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#4ECDC4]"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <div>
              <p class="text-sm">{{ footerData.supportTitle }}</p>
              <p class="text-sm">{{ footerData.supportInfo }}</p>
              <p class="text-sm">{{ footerData.phone }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center space-x-8 mt-8">
          <NuxtLink
            v-for="(link, index) in footerData.links"
            :key="index"
            :to="link.url"
            class="text-[#B2D7D7] hover:text-white text-sm underline"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  footerData: {
    type: Object,
    default: () => ({
      contactTitle: 'For inquiries, please contact us at:',
      contactInfo: 'info@biodigestin.com',
      email: 'support@biodigestin.com',
      supportTitle: 'You can contact our support at:',
      supportInfo: 'Tel: +44 (0)20 3948 226',
      phone: 'Monday to Friday, 9am - 5pm',
      links: [
        { text: 'Terms of use', url: '/terms' },
        { text: 'Privacy', url: '/privacy' },
        { text: 'Privacy Policy', url: '/privacy-policy' },
      ],
      copyright: '© 2023 BioDigestin. All rights reserved.',
    }),
  },
});
</script>

<template>
  <header class="bg-[#FFFDF8]">
    <div class="container mx-auto py-4 px-4 flex items-center justify-between">
      <div class="logo flex items-center">
        <!-- {{ headerSection }} -->
        <a href="/" class="flex items-center">
          <img :src="logoUrl" alt="Bio Digestin" class="h-8 md:h-12" />
        </a>
        <LanguageSwitcher class="ml-4 hidden md:flex" />
      </div>

      <nav class="hidden md:flex items-center space-x-6">
        <a
          :href="headerSection?.ingredients?.link || '#ingredients'"
          class="text-[#015F5D] hover:text-primary-dark font-semibold border-b-2 px-1 border-[#015F5D]"
        >
          {{ headerSection?.ingredients?.link_text || 'Ingredients' }}
        </a>
        <a
          :href="headerSection?.testimonials?.link || '#testimonials'"
          class="text-[#015F5D] hover:text-primary-dark font-semibold border-b-2 px-1 border-[#015F5D]"
        >
          {{ headerSection?.testimonials?.link_text || 'Testimonials' }}
        </a>
        <a
          :href="headerSection?.start_now?.link || '#free-trial'"
          class="bg-[#01A9AC4D] font-semibold text-[#015F5D] px-4 py-1.5 rounded-full hover:bg-primary-dark transition-colors border-2 border-[#015F5D]"
        >
          {{ headerSection?.start_now?.link_text || 'Get Started' }}
        </a>
      </nav>

      <div class="flex items-center md:hidden">
        <LanguageSwitcher class="mr-4" />
        <button aria-label="Toggle mobile menu" @click="toggleMobileMenu">
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- {{ props }} -->
    <div v-if="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-white z-50">
      <div class="container mx-auto py-4 px-4">
        <div class="flex flex-col space-y-4">
          <a :href="headerSection?.ingredients?.link || '#ingredients'" class="text-primary hover:text-primary-dark">
            {{ headerSection?.ingredients?.link_text || 'Ingredients' }}
          </a>
          <a :href="headerSection?.testimonials?.link || '#testimonials'" class="text-primary hover:text-primary-dark">
            {{ headerSection?.testimonials?.link_text || 'Testimonials' }}
          </a>
          <a
            :href="headerSection?.start_now?.link || '#free-trial'"
            class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors inline-block w-fit"
          >
            {{ headerSection?.start_now?.link_text || 'Get Started' }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
  props: {
    logoUrl: {
      type: String,
      default: '/BioDigestin Logo.png',
    },
    headerSection: {
      type: Object,
      default: () => ({
        start_now: {
          link: '#free-trial',
          link_text: 'Get Started',
        },
        ingredients: {
          link: '#ingredients',
          link_text: 'Ingredients',
        },
        testimonials: {
          link: '#testimonials',
          link_text: 'Testimonials',
        },
      }),
    },
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  mounted() {
    console.log('AppHeader mounted with header section:', this.headerSection);
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

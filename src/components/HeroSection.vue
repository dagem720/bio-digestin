<template>
  <section class="relative bg-[#FFFDF8] overflow-visible lg:max-h-screen">
    <div class="mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div class="relative order-2 md:order-1">
          <p
            class="text-navy md:hidden absolute -top-4 w-3/4 right-0 text-center md:text-left md:mb-8 text-md md:text-lg break-words"
          >
            {{ heroData.subtitle }}
          </p>
          <button
            style="
              background: var(--Background-Button-Primary, #01a9ac);
              box-shadow: 0px -2px 4px 0px #015f5d inset;
              box-shadow: 0px 4px 4px 0px #98dcdd inset;
              box-shadow: 0px 2px 8px 0px #00000040;
            "
            class="rounded-full md:hidden text-white px-3 py-2 text-sm absolute right-3 top-1/2 inline-block hover:bg-primary-dark transition-colors"
            @click="toggleMobileMenu"
          >
            {{ heroData.ctaText }}
          </button>
          <div class="rounded-full overflow-hidden p-2 mx-auto md:-mb-36">
            <img class="hidden md:block" :src="heroData.desktopBackground" :alt="heroData.imageAlt" />
            <img class="md:hidden" :src="heroData.mobileBackground" :alt="heroData.imageAlt" />
          </div>
        </div>
        <div
          class="container order-1 p-5 md:order-2 h-full overflow-hidden md:-mt-36 lg:-mt-44 pt-0 md:pt-20 lg:pt-0 md:pr-6 lg:pr-20 justify-center flex flex-col items-end"
          style="
            background-image: url('/Clip path group.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left;
          "
        >
          <h1 class="text-2xl text-start md:text-end lg:text-3xl xl:text-5xl font-bold text-primary-dark mb-4">
            {{ heroData.title }}
          </h1>
          <p class="text-navy hidden md:block text-center md:text-right md:mb-8 text-sm md:text-lg break-words">
            {{ heroData.subtitle }}
          </p>

          <a
            :href="heroData.ctaLink"
            style="
              background: var(--Background-Button-Primary, #01a9ac);
              box-shadow: 0px -2px 4px 0px #015f5d inset;
              box-shadow: 0px 4px 4px 0px #98dcdd inset;
              box-shadow: 0px 2px 8px 0px #00000040;
            "
            class="rounded-full hidden text-white px-6 py-3 md:inline-block hover:bg-primary-dark transition-colors"
          >
            {{ heroData.ctaText }}
          </a>
        </div>
      </div>
    </div>
    <!-- Decorative bubbles -->
    <div class="absolute top-1/4 right-0 w-32 h-32 bg-white rounded-full opacity-20"></div>
    <div class="absolute bottom-1/4 left-0 w-24 h-24 bg-white rounded-full opacity-20"></div>
    <!-- <button style="z-index: 10" @click="toggleMobileMenu">Test Click</button> -->
  </section>
</template>

<script>
import { defineProps } from 'vue';
defineProps({
  heroData: {
    type: Object,
    default: () => ({
      title: 'FEEL LIGHTER AND BALANCED EVERY DAY — NATURALLY',
      subtitle: 'Support digestion, gut comfort, and restore health',
      ctaText: 'GET YOUR FREE TRIAL',
      ctaLink: '#free-trial',
      image: '/Mask group (4).png',
      imageAlt: 'Woman holding Bio Digestin product',
      mobileBackground: '',
      desktopBackground: '',
    }),
  },
});

export default defineComponent({
  props: {
    heroData: {
      type: Object,
      // default: () => ({
      //   title: "FEEL LIGHTER AND BALANCED EVERY DAY — NATURALLY",
      //   subtitle: "Support digestion, gut comfort, and restore health",
      //   ctaText: "GET YOUR FREE TRIAL",
      //   ctaLink: "#free-trial",
      //   image: "/Mask group (4).png",
      //   imageAlt: "Woman holding Bio Digestin product",
      // }),
    },
  },
  created() {
    console.log('dddds');
  },
  methods: {
    toggleMobileMenu() {
      console.log('ddd');
    },
  },
});
</script>

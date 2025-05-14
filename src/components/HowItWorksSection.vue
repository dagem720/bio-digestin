<template>
  <div>
    <!-- Desktop layout -->
    <section class="hidden md:block py-16 px-4 bg-white">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold text-primary-dark text-left mb-12">
            {{ sectionData.title }}
          </h2>
          <span class="text-end">
            <p class="text-navy italic">
              {{ sectionData.conclusion }}
            </p>
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(step, index) in sectionData.steps"
            :key="index"
            class="rounded-lg overflow-hidden"
          >
            <div class="h-48 overflow-hidden">
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-3xl font-semibold text-primary mb-2">
                STEP {{ index + 1 }}
              </h3>
              <p class="text-navy">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile layout -->
    <section class="md:hidden py-6 px-4 bg-[#b2d7d7]">
      <div class="container mx-auto">
        <h2 class="text-lg font-bold text-[#003B39] text-center mb-2">
          {{ sectionData.title }}
        </h2>

        <p class="text-xs text-[#003B39] text-center mb-6">
          {{ sectionData.conclusion }}
        </p>

        <div class="space-y-6">
          <div
            v-for="(step, index) in sectionData.steps"
            :key="index"
            class="bg-white flex rounded-lg overflow-hidden"
          >
            <div
              class="h-32 overflow-hidden"
              :class="{ 'order-2': index == 1 }"
            >
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4 flex flex-col justify-center">
              <h3 class="text-lg font-semibold text-[#01A9AC] mb-1">
                STEP {{ index + 1 }}
              </h3>
              <p class="text-xs text-[#003B39]">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  sectionData: {
    type: Object,
    default: () => ({
      title: "HOW BIODIGESTIN™ WORKS FOR YOU",
      conclusion:
        "BioDigestin™ fits effortlessly into your morning routine — so your gut feels happy all day long.",
      steps: [
        {
          image:
            "/placeholder.svg?height=200&width=300&query=person%20taking%20tablet%20with%20breakfast",
          title: "Step 1",
          description: "Take one tablet daily with breakfast.",
        },
        {
          image:
            "/placeholder.svg?height=200&width=300&query=person%20feeling%20good%20after%20meal",
          title: "Step 2",
          description:
            "Support your gut, balance your flora, and boost digestion.",
        },
        {
          image:
            "/placeholder.svg?height=200&width=300&query=energetic%20person%20enjoying%20day",
          title: "Step 3",
          description: "Feel more energetic, lighter, and healthier every day.",
        },
      ],
    }),
  },
});
</script>

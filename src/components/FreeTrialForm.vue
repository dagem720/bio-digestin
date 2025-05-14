<template>
  <section id="free-trial" class="py-6 md:py-16 px-4 md:px-10 lg:px-20 bg-[#b2d7d7] md:bg-transparent">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <h2 class="text-lg md:text-3xl font-bold text-[#003B39] md:text-primary-dark text-center mb-2 md:mb-4">
          {{ formData.title }}
        </h2>
        <p class="text-xs md:text-base text-[#003B39] md:text-navy text-center mb-6 md:mb-8">
          {{ formData.subtitle }}
        </p>
      </div>

      <form class="space-y-3 md:space-y-4" @submit.prevent="submitForm">
        <div class="flex flex-col gap-3 md:gap-4">
          <div>
            <input
              v-model="form.firstName"
              type="text"
              :placeholder="formData.fields.firstName"
              class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
              required
            />
          </div>
          <div>
            <input
              v-model="form.lastName"
              type="text"
              :placeholder="formData.fields.lastName"
              class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div>
          <input
            v-model="form.phone"
            type="tel"
            :placeholder="formData.fields.phone"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
            required
          />
        </div>

        <div>
          <input
            v-model="form.email"
            type="email"
            :placeholder="formData.fields.email"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
            required
          />
        </div>

        <div>
          <input
            v-model="form.address1"
            type="text"
            :placeholder="formData.fields.address1"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
            required
          />
        </div>

        <div>
          <input
            v-model="form.address2"
            type="text"
            :placeholder="formData.fields.address2"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
          />
        </div>

        <div>
          <input
            v-model="form.city"
            type="text"
            :placeholder="formData.fields.city"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
            required
          />
        </div>

        <div>
          <input
            v-model="form.postalCode"
            type="text"
            :placeholder="formData.fields.postalCode"
            class="w-full p-2 md:p-3 border bg-[#01A9AC4D] placeholder:text-[#003B39] rounded-[10px] border-secondary focus:outline-none ring-2 ring-primary text-sm md:text-base"
            required
          />
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="promo-code" v-model="form.hasPromoCode" type="checkbox" class="custom-check" />
          </div>
          <label for="promo-code" class="ml-2 text-xs md:text-sm text-[#003B39] md:text-navy">
            {{ formData.checkboxes.promoCode }}
          </label>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="newsletter" v-model="form.newsletter" type="checkbox" class="custom-check" />
          </div>
          <label for="newsletter" class="ml-2 text-xs md:text-sm text-[#003B39] md:text-navy">
            {{ formData.checkboxes.newsletter }}
          </label>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="subscription" v-model="form.subscription" type="checkbox" class="custom-check" required />
          </div>
          <label for="subscription" class="ml-2 text-xs md:text-sm text-[#003B39] md:text-navy">
            {{ formData.checkboxes.subscription }}
          </label>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="terms" v-model="form.termsAndConditions" type="checkbox" class="custom-check" required />
          </div>
          <label for="terms" class="ml-2 text-xs md:text-sm text-[#003B39] md:text-navy">
            {{ formData.checkboxes.terms }}
          </label>
        </div>

        <button
          type="submit"
          style="
            background: var(--Background-Button-Primary, #01a9ac);
            box-shadow: 0px -2px 4px 0px #015f5d inset;
            box-shadow: 0px 4px 4px 0px #98dcdd inset;
            box-shadow: 0px 2px 8px 0px #00000040;
          "
          class="rounded-full w-full text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base inline-block hover:bg-primary-dark transition-colors"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? formData.submitting : formData.submitButton }}
        </button>
      </form>
      <!-- {{ formData.disclaimers }} -->
      <div
        class="mt-4 md:mt-8 text-[10px] flex flex-col md:text-xs text-[#003B39] md:text-navy-light space-y-1 md:space-y-2"
      >
        <p v-html="formData.disclaimers" />
      </div>

      <div class="flex justify-center mt-4 md:mt-6">
        <a :href="formData.withdrawalButtonLink" class="text-xs md:text-sm text-black underline">
          {{ formData.withdrawalButton }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  formData: {
    type: Object,
    default: () => ({
      title: 'TRY BIODIGESTIN™ FOR FREE',
      subtitle: 'Experience the difference yourself — get your free trial today and start feeling lighter and better.',
      fields: {
        firstName: 'First Name*',
        lastName: 'Last Name*',
        phone: 'Phone number*',
        email: 'E-mail*',
        address1: 'Address*',
        address2: 'Address 2',
        city: 'City*',
        postalCode: 'Postcode*',
      },
      checkboxes: {
        promoCode: 'I have a promotional code',
        newsletter: 'Yes, I want to receive the newsletter',
        subscription:
          'Yes, I understand I can cancel at any time and have read the subscription terms. The subscription is non-binding and can be cancelled at any time.',
        terms: 'I have read the Terms and Conditions and the Privacy Policy and agree to them.',
      },
      submitButton: 'GET A FREE SAMPLE NOW',
      submitting: 'Processing...',

      disclaimers:
        'You only pay £2.95 for shipping & handling. This is not an obligation for future purchases. If you do not want to continue, simply inform us within the time specified in the invoice. The subscription can be changed or cancelled at any time. You have a 14-day unconditional right of withdrawal. If you wish to use it, you will have to return the product shipping costs paid yourself. Our friendly customer service team is available to help you from Monday to Friday 9 am to 5 pm. Only one free trial per household.',
      withdrawalButtonLink: '#',
      withdrawalButton: 'Withdrawal',
    }),
  },
});

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  postalCode: '',
  hasPromoCode: false,
  newsletter: false,
  subscription: false,
  termsAndConditions: false,
});
</script>

<style>
.custom-check {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #01a9ac;
  border-radius: 5px;
  background-color: rgba(1, 169, 172, 0.3);
}

.custom-check:checked {
  background-color: #01a9ac;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNNSAxM2w0IDRMMTkgNyIvPjwvc3ZnPg==');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

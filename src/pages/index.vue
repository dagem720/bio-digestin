<template>
  <div>
    <div v-if="isLoading" class="flex items-center justify-center min-h-screen bg-[#b2d7d7]">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#01A9AC] mx-auto mb-4"></div>
        <p class="text-[#003B39]">Loading content...</p>
      </div>
    </div>
    <div v-else-if="apiError" class="flex items-center justify-center min-h-screen bg-[#b2d7d7]">
      <div class="text-center p-6 bg-white rounded-lg shadow-lg">
        <p class="text-red-500 mb-4">Error loading content.</p>
        <button class="bg-[#01A9AC] text-white px-4 py-2 rounded-lg hover:bg-[#015F5D]" @click="loadPageData">
          Try Again
        </button>
      </div>
    </div>
    <div v-else>
      <!-- {{ pageData.header_section }} -->
      <AppHeader :logo-url="pageData.headerLogo" :header-section="pageData.headerSection" />

      <main>
        <HeroSection :hero-data="pageData.hero" />
        <GutDiscomfortSection :section-data="pageData.gutDiscomfort" />
        <MadeInNorwaySection :section-data="pageData.madeInNorway" />
        <DailyGutSupportSection id="ingredients" :section-data="pageData.dailyGutSupport" />
        <HowItWorksSection :section-data="pageData.howItWorks" />
        <WhyChooseSection id="testimonials" :section-data="pageData.whyChoose" />
        <FreeTrialForm :form-data="pageData.freeTrial" />
      </main>

      <AppFooter :footer-data="pageData.footer" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
// import { useI18n } from 'vue-i18n';
import { useApi } from '~/composables/useApi';
import { useLocaleStore } from '@/stores/locale';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    // const { locale } = useI18n();

    const localeStore = useLocaleStore();

    const isLoading = ref(true);
    const apiError = ref(false);
    const pageData = ref({
      headerLogo: '/BioDigestin Logo.png',
      headerSection: {
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
      },
      hero: {
        title: 'FEEL LIGHTER AND BALANCED EVERY DAY — NATURALLY',
        subtitle: 'Support digestion, gut comfort, and restore health',
        ctaText: 'GET YOUR FREE TRIAL',
        ctaLink: '#free-trial',
        image: '/Mask group (5).png',
        imageAlt: 'Woman holding Bio Digestin product',
      },
      gutDiscomfort: {
        title: 'GUT DISCOMFORT HOLDING YOU BACK?',
        subtitle: "You're not alone — millions struggle daily with digestion issues.",
        benefits: [
          {
            icon: '/Component 1 (1).png',
            title: 'Bloating after meals',
            description: 'Uncomfortable fullness and distension after eating',
          },
          {
            icon: '/Component 1.png',
            title: 'Sluggish digestion and absorption',
            description: 'Slow processing of nutrients and waste',
          },
          {
            icon: '/Component 1 (2).png',
            title: 'Unpredictable gut health',
            description: 'Irregular patterns affecting daily life',
          },
        ],
      },
      madeInNorway: {
        title: 'MADE IN NORWAY',
        description:
          'Made in Norway, a country renowned worldwide for the highest quality, safety, and reliability. Norway combines untouched nature with innovative expertise to create products that are sustainable, safe, and effective. This blend represents pure Nordic innovation with cutting-edge science to create a product that truly works.',
        flagImage: '/Made in Norway Image.png',
        flagAlt: 'Norwegian Flag',
      },
      dailyGutSupport: {
        title: 'DAILY GUT SUPPORT MADE SIMPLE',
        subtitle: 'With powerful enzymes, probiotics, and elderberry',
        description:
          'BioDigestin™ combines the strength of nature and science to keep your digestive system functioning strong — with just one daily tablet.',
        ingredients: [
          {
            icon: '/Component 1 2.png',
            name: 'DIGEZYMES',
            description: 'Helps break down proteins, fats, and proteins',
          },
          {
            icon: '/Group.png',
            name: 'INULIN',
            description: 'Feeds your healthy gut bacteria',
          },
          {
            icon: '/Vector.png',
            name: 'ELDERBERRY',
            description: 'Supports your immune defenses',
          },
        ],
      },
      howItWorks: {
        title: 'HOW BIODIGESTIN™ WORKS FOR YOU',
        conclusion: 'BioDigestin™ fits effortlessly into your morning routine — so your gut feels happy all day long.',
        steps: [
          {
            image: '/2K5A0268 1.png',
            title: 'Step 1',
            description: 'Take one tablet daily with breakfast.',
          },
          {
            image: '/2K5A0308.png',
            title: 'Step 2',
            description: 'Support your gut, balance your flora, and boost digestion.',
          },
          {
            image: '/2K5A0281.png',
            title: 'Step 3',
            description: 'Feel more energetic, lighter, and healthier every day.',
          },
        ],
      },
      whyChoose: {
        title: 'WHY CHOOSE BIODIGESTIN™?',
        subtitle: 'Trust BioDigestin™ for daily gut wellness — backed by science, inspired by nature',
        benefits: [
          {
            icon: '/Component 1 new .png',
            title: 'Natural Ingredients',
            description: 'Pure, plant-based formula with no artificial additives',
            highlighted: false,
          },
          {
            icon: '/Component 1-1 new.png',
            title: 'Boosts Probiotic Growth',
            description: 'Feeds your beneficial bacteria',
            highlighted: false,
          },
          {
            icon: '/Component 1-2new .png',
            title: 'Made in Norway',
            description: 'With strict GMP standards',
            highlighted: false,
          },
          {
            icon: '/Component 1-3 new.png',
            title: 'Regularly tested',
            description: 'For purity and effectiveness',
            highlighted: false,
          },
          {
            icon: '/Group new.png',
            title: 'IT IS FREE TO TRY FOR A WHOLE MONTH!',
            description: 'No commitment',
            highlighted: true,
          },
        ],
      },
      freeTrial: {
        title: 'TRY BIODIGESTIN™ FOR FREE',
        subtitle:
          'Experience the difference yourself — get your free trial today and start feeling lighter and better.',
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
        disclaimers: [
          'You only pay £2.95 for shipping & handling.',
          'This is not an obligation for future purchases. If you do not want to continue, simply inform us within the time specified in the invoice.',
          'The subscription can be changed or cancelled at any time.',
          'You have a 14-day unconditional right of withdrawal. If you wish to use it, you will have to return the product shipping costs paid yourself.',
          'Our friendly customer service team is available to help you from Monday to Friday 9 am to 5 pm.',
          'Only one free trial per household.',
        ],
      },
      footer: {
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
      },
    });

    // Watch for locale changes

    const loadPageData = async (locale = 'en') => {
      console.log('Loading page data');
      isLoading.value = true;
      apiError.value = false;

      try {
        console.log(locale);
        const api = useApi(locale);
        const data = await api.fetchPageData();
        if (data && data.status === 'success') {
          pageData.value = mapApiDataToComponents(data);
        } else {
          apiError.value = true;
        }
      } catch (error) {
        apiError.value = true;
      } finally {
        isLoading.value = false;
      }
    };

    const mapApiDataToComponents = (apiData) => {
      console.log('Mapping API data to components');

      if (!apiData || !apiData.data) {
        console.error('Invalid API data structure:', apiData);
        return pageData.value;
      }

      try {
        const stripHtmlTags = (html) => {
          if (!html) return '';
          return html.replace(/<\/?[^>]+(>|$)/g, '');
        };

        const getFullImageUrl = (imagePath) => {
          if (!imagePath) return '';

          // If the path already includes http:// or https://, return it as is
          if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
          }

          // For paths from the API that are relative
          return `https://backend.artroshield.de/storage/${imagePath}`;
        };

        const extractFirstPart = (text) => {
          if (!text) return '';
          const parts = text.split('at');
          return parts[0] + 'at:';
        };

        const extractSecondPart = (text) => {
          if (!text) return '';
          const parts = text.split('at');
          return parts.length > 1 ? parts[1].trim() : '';
        };

        const data = apiData.data;

        return {
          headerLogo: getFullImageUrl(data.header_section?.header_product_logo) || '/BioDigestin Logo.png',
          headerSection: {
            start_now: {
              link: data.header_section?.start_now?.link || '#free-trial',
              link_text: data.header_section?.start_now?.link_text || 'Get Started',
            },
            ingredients: {
              link: data.header_section?.ingredients?.link || '#ingredients',
              link_text: data.header_section?.ingredients?.link_text || 'Ingredients',
            },
            testimonials: {
              link: data.header_section?.testimonials?.link || '#testimonials',
              link_text: data.header_section?.testimonials?.link_text || 'Testimonials',
            },
          },
          hero: {
            title: data.bio_digestin_hero_section?.headline || pageData.value.hero.title,
            subtitle: data.bio_digestin_hero_section?.subheadline
              ? stripHtmlTags(data.bio_digestin_hero_section?.subheadline)
              : pageData.value.hero.subtitle,
            ctaText: data.bio_digestin_hero_section?.button_text || pageData.value.hero.ctaText,
            ctaLink: data.bio_digestin_hero_section?.button_link || pageData.value.hero.ctaLink,
            image: getFullImageUrl(data.bio_digestin_hero_section?.product_image) || pageData.value.hero.image,
            imageAlt: 'BioDigestin product',
            mobileBackground: getFullImageUrl(data.bio_digestin_hero_section?.mobile_background_image) || '',
            desktopBackground: getFullImageUrl(data.bio_digestin_hero_section?.desktop_background_image) || '',
          },
          gutDiscomfort: {
            title: data.problem_statement_section?.headline || pageData.value.gutDiscomfort.title,
            subtitle: data.problem_statement_section?.subheadline
              ? stripHtmlTags(data.problem_statement_section?.subheadline)
              : pageData.value.gutDiscomfort.subtitle,
            benefits:
              data.problem_statement_section?.symptoms_risk_factors?.map((item) => ({
                icon: getFullImageUrl(item.image) || '/placeholder.svg',
                title: item.name || '',
                description: item.description || '',
              })) || pageData.value.gutDiscomfort.benefits,
          },
          madeInNorway: {
            title: data.origin_trust_badge_section?.heading || pageData.value.madeInNorway.title,
            description: data.origin_trust_badge_section?.body_text || pageData.value.madeInNorway.description,
            flagImage:
              getFullImageUrl(data.origin_trust_badge_section?.flag_image) || pageData.value.madeInNorway.flagImage,
            flagAlt: 'Norwegian Flag',
          },
          dailyGutSupport: {
            title: data.daily_support_benefit_section?.headline || pageData.value.dailyGutSupport.title,
            subtitle: data.daily_support_benefit_section?.subheadline
              ? stripHtmlTags(data.daily_support_benefit_section?.subheadline)
              : pageData.value.dailyGutSupport.subtitle,
            description: data.daily_support_benefit_section?.description
              ? stripHtmlTags(data.daily_support_benefit_section?.description)
              : pageData.value.dailyGutSupport.description,
            ingredients:
              data.daily_support_benefit_section?.daily_benefits?.map((item) => ({
                icon: getFullImageUrl(item.image) || '/placeholder.svg',
                name: item.name || '',
                description: item.description || '',
              })) || pageData.value.dailyGutSupport.ingredients,
          },
          howItWorks: {
            title: data.how_bio_digestin_works_section?.headline || pageData.value.howItWorks.title,
            conclusion: data.how_bio_digestin_works_section?.subheadline
              ? stripHtmlTags(data.how_bio_digestin_works_section?.subheadline)
              : pageData.value.howItWorks.conclusion,
            steps:
              data.how_bio_digestin_works_section?.how_it_works?.map((item) => ({
                image: getFullImageUrl(item.image) || '/placeholder.svg',
                title: item.name || '',
                description: item.description || '',
              })) || pageData.value.howItWorks.steps,
          },
          whyChoose: {
            title: data.why_choose_product_section?.headline || pageData.value.whyChoose.title,
            subtitle: data.why_choose_product_section?.subheadline
              ? stripHtmlTags(data.why_choose_product_section?.subheadline)
              : pageData.value.whyChoose.subtitle,
            benefits:
              data.why_choose_product_section?.why_choose_product?.map((item) => ({
                icon: getFullImageUrl(item.image) || '/placeholder.svg',
                title: '',
                description: item.description || '',
                highlighted: item.card_background_color === '#FFFDF8',
              })) || pageData.value.whyChoose.benefits,
          },
          freeTrial: {
            title: data.signup_form_section?.heading || pageData.value.freeTrial.title,
            subtitle: data.signup_form_section?.description || pageData.value.freeTrial.subtitle,
            fields: {
              firstName: data.signup_form_section?.first_name_label || pageData.value.freeTrial.fields.firstName,
              lastName: data.signup_form_section?.last_name_label || pageData.value.freeTrial.fields.lastName,
              phone: data.signup_form_section?.phone_number_label || pageData.value.freeTrial.fields.phone,
              email: data.signup_form_section?.email_label || pageData.value.freeTrial.fields.email,
              address1: data.signup_form_section?.street_label || pageData.value.freeTrial.fields.address1,
              address2: data.signup_form_section?.street2_label || pageData.value.freeTrial.fields.address2,
              city: data.signup_form_section?.city_label || pageData.value.freeTrial.fields.city,
              postalCode: data.signup_form_section?.postcode_label || pageData.value.freeTrial.fields.postalCode,
            },
            checkboxes: {
              promoCode:
                data.signup_form_section?.promotional_checkbox_label || pageData.value.freeTrial.checkboxes.promoCode,
              newsletter:
                data.signup_form_section?.newsletter_checkbox_label || pageData.value.freeTrial.checkboxes.newsletter,
              subscription:
                data.signup_form_section?.subscription_checkbox_label ||
                pageData.value.freeTrial.checkboxes.subscription,
              terms: data.signup_form_section?.terms_checkbox_label || pageData.value.freeTrial.checkboxes.terms,
            },
            submitButton: data.signup_form_section?.submit_button_text || pageData.value.freeTrial.submitButton,
            submitting: 'Processing...',
            disclaimers: data.signup_form_section?.disclaimer_text ?? pageData.value.freeTrial.disclaimers,
            withdrawalButton: data.signup_form_section?.withdrawal_button_text || '',
            withdrawalButtonLink: data.signup_form_section?.withdrawal_button_link || '',
          },
          footer: {
            contactTitle: data.footer_section?.first_heading
              ? extractFirstPart(data.footer_section?.first_heading)
              : pageData.value.footer.contactTitle,
            contactInfo: data.footer_section?.first_heading
              ? extractSecondPart(data.footer_section?.first_heading)
              : pageData.value.footer.contactInfo,
            email: 'support@biodigestin.com',
            supportTitle: 'You can contact our support at:',
            supportInfo: data.footer_section?.second_heading
              ? stripHtmlTags(data.footer_section?.second_heading)
              : pageData.value.footer.supportInfo,
            phone: 'Monday to Friday, 9am - 5pm',
            links: [
              {
                text: data.footer_section?.terms_of_service?.terms_button_text || 'Terms of use',
                url: data.footer_section?.terms_of_service?.terms_link || '/terms',
              },
              {
                text: data.footer_section?.privacy_policy?.privacy_button_text || 'Privacy',
                url: data.footer_section?.privacy_policy?.privacy_link || '/privacy',
              },
              {
                text: data.footer_section?.imprint?.imprint_button_text || 'Imprint',
                url: data.footer_section?.imprint?.imprint_link || '/imprint',
              },
            ],
            copyright: '© 2023 BioDigestin. All rights reserved.',
          },
        };
      } catch (error) {
        console.error('Error mapping API data:', error);
        return pageData.value;
      }
    };

    onMounted(() => {
      console.log('Index page mounted');
      loadPageData();
    });

    watch(localeStore, (newLocale) => {
      console.log('Locale changed to:', newLocale);
      try {
        loadPageData(localeStore.currentLocale ?? 'en');
      } catch (error) {
        console.log(error);
      }
    });

    return {
      isLoading,
      apiError,
      pageData,
      loadPageData,
    };
  },
});
</script>

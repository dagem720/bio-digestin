// import { defineStore } from 'pinia';
// import { ref } from 'vue';
// import type { ContentResponse } from '~/types';

// export const useContentStore = defineStore('content', () => {
//   const content = ref<ContentResponse | null>(null);
//   const loading = ref(false);
//   const error = ref<string | null>(null);

//   const fetchContent = async (lang: 'en' | 'de') => {
//     // console.log('here')
//     loading.value = true;
//     error.value = null;

//     try {
//       const url =
//         lang === 'en'
//           ? 'https://backend.artroshield.de/api/v1/pages/bio-digestin'
//           : 'https://backend.artroshield.de/api/v1/pages/bio-digestin-de';

//       const response = await fetch(url);

//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const data = await response.json();
//       content.value = data;
//     } catch (e) {
//       error.value = e instanceof Error ? e.message : 'An error occurred while fetching content';
//       console.error('Error fetching content:', e);
//     } finally {
//       loading.value = false;
//     }
//   };

//   return {
//     content,
//     loading,
//     error,
//     fetchContent,
//   };
// });

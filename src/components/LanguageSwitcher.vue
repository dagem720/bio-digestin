<template>
  <div class="flex items-center space-x-2">
    <button
      v-for="loc in locale.availableLocales"
      :key="loc.code"
      class="px-2 py-1 rounded text-sm"
      :class="locale.currentLocale === loc.code ? 'bg-primary text-white' : 'bg-gray-200 text-navy hover:bg-gray-300'"
      @click="locale.setLocale(loc.code)"
    >
      {{ loc.name }}
    </button>
  </div>
</template>

<script setup>
import { useLocaleStore } from '@/stores/locale';

const localeStore = useLocaleStore();
const locale = localeStore;
</script>

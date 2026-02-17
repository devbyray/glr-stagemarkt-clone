<template>
  <NuxtLink
    :to="`/vacancies/${vacancy.id}`"
    class="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
  >
    <h3 class="text-xl font-bold text-gray-900 mb-2">
      {{ vacancy.title }}
    </h3>
    <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
      <span class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        {{ vacancy.company }}
      </span>
      <span class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ vacancy.location }}
      </span>
    </div>
    <p class="text-gray-700 line-clamp-2">
      {{ vacancy.description }}
    </p>
    <div class="mt-4 text-sm text-gray-500">
      Geplaatst: {{ formatDate(vacancy.postedDate) }}
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  vacancy: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('nl-NL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

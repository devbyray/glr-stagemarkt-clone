<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Search Header -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">
            Zoek vacatures
          </h1>
          <SearchBar />
          
          <div v-if="searchQuery" class="mt-4">
            <p class="text-gray-600">
              <span class="font-medium">{{ vacancies.length }}</span> 
              {{ vacancies.length === 1 ? 'resultaat' : 'resultaten' }} 
              voor "<span class="font-semibold text-gray-900">{{ searchQuery }}</span>"
            </p>
          </div>
        </div>

        <!-- Results -->
        <div>
          <VacancyList :vacancies="vacancies" :loading="loading" />
        </div>

        <!-- Back to Home -->
        <div class="mt-8 text-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { searchVacancies, getAllVacancies } = useVacancies()

const loading = ref(true)
const vacancies = ref([])
const searchQuery = ref('')

const fetchVacancies = async () => {
  loading.value = true
  searchQuery.value = route.query.q || ''
  
  if (searchQuery.value) {
    vacancies.value = await searchVacancies(searchQuery.value)
  } else {
    vacancies.value = await getAllVacancies()
  }
  
  loading.value = false
}

// Fetch on mount
onMounted(fetchVacancies)

// Watch for query changes
watch(() => route.query.q, fetchVacancies)
</script>

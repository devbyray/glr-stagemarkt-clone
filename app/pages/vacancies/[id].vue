<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          <p class="mt-4 text-gray-600">Vacature laden...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="bg-white rounded-lg shadow-sm p-8 text-center">
          <svg class="w-16 h-16 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Vacature niet gevonden</h2>
          <p class="text-gray-600 mb-6">Deze vacature bestaat niet of is niet meer beschikbaar</p>
          <NuxtLink
            to="/search"
            class="inline-block px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
          >
            Bekijk alle vacatures
          </NuxtLink>
        </div>

        <!-- Vacancy Details -->
        <div v-else-if="vacancy" class="bg-white rounded-lg shadow-sm overflow-hidden">
          <!-- Header -->
          <div class="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-4">
              {{ vacancy.title }}
            </h1>
            <div class="flex flex-wrap gap-4 text-lg">
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {{ vacancy.company }}
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ vacancy.location }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <div class="mb-6">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Geplaatst op {{ formatDate(vacancy.postedDate) }}
              </div>

              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Over deze stage
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {{ vacancy.description }}
              </p>
            </div>

            <!-- Call to Action -->
            <div class="border-t pt-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Interesse?
              </h3>
              <p class="text-gray-600 mb-6">
                Neem contact op met {{ vacancy.company }} voor meer informatie of om te solliciteren.
              </p>
              <div class="flex flex-wrap gap-4">
                <button
                  class="px-8 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
                >
                  Solliciteer nu
                </button>
                <button
                  class="px-8 py-3 border-2 border-primary-500 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Bewaar vacature
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8">
          <button
            @click="goBack"
            class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar resultaten
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { getVacancyById } = useVacancies()

const loading = ref(true)
const error = ref(false)
const vacancy = ref(null)

onMounted(async () => {
  const id = route.params.id
  vacancy.value = await getVacancyById(id)
  
  if (!vacancy.value) {
    error.value = true
  }
  
  loading.value = false
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('nl-NL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const goBack = () => {
  router.back()
}
</script>

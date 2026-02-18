<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
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
            class="inline-block px-6 py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors uppercase"
          >
            Bekijk alle vacatures
          </NuxtLink>
        </div>

        <!-- Vacancy Details -->
        <div v-else-if="vacancy" class="bg-white overflow-hidden">
          <!-- Image with Date Overlay -->
          <div class="relative w-full h-96 overflow-hidden">
            <img 
              :src="vacancy.image" 
              :alt="vacancy.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-6 right-6 bg-black text-white px-4 py-2 text-sm font-bold uppercase">
              {{ formatDateShort(vacancy.postedDate) }}
            </div>
          </div>
          
          <!-- Header -->
          <div class="bg-primary-500 text-gray-900 p-8">
            <h1 class="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight leading-tight">
              {{ vacancy.title }}
            </h1>
            <div class="flex flex-wrap gap-6 text-lg font-bold">
              <span>{{ vacancy.company }}</span>
              <span>•</span>
              <span>{{ vacancy.location }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 md:p-12">
            <h2 class="text-3xl font-black uppercase text-gray-900 mb-6">
              Over deze stage
            </h2>
            <p class="text-gray-700 text-lg leading-relaxed mb-8">
              {{ vacancy.description }}
            </p>

            <!-- Call to Action -->
            <div class="border-t-2 border-gray-200 pt-8">
              <h3 class="text-2xl font-black uppercase text-gray-900 mb-4">
                Interesse?
              </h3>
              <p class="text-gray-600 mb-6 text-lg">
                Neem contact op met {{ vacancy.company }} voor meer informatie of om te solliciteren.
              </p>
              <div class="flex flex-wrap gap-4">
                <button class="px-8 py-4 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors uppercase text-sm">
                  Solliciteer nu
                </button>
                <button class="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-100 transition-colors uppercase text-sm">
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
            class="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-bold uppercase"
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

const formatDateShort = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const months = ['JANUARI', 'FEBRUARI', 'MAART', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AUGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER']
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

const goBack = () => {
  router.back()
}
</script>
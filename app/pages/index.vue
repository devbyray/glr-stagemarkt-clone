<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-primary-500 text-gray-900 py-20 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-heading font-extrabold mb-6 uppercase tracking-tight">
            Vind jouw perfecte stage
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-900 font-medium">
            Ontdek de beste stageplekken voor MBO studenten
          </p>
          <div class="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Vacancies Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-gray-900">
              Nieuwste vacatures
            </h2>
            <NuxtLink
              to="/search"
              class="text-gray-900 hover:text-gray-700 font-bold flex items-center gap-2 uppercase"
            >
              Bekijk alle vacatures
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>

          <VacancyList :vacancies="featuredVacancies" :loading="loading" />
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Waarom bij ons zoeken?
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2 uppercase">Eenvoudig zoeken</h3>
              <p class="text-gray-600">Vind snel de stage die bij jou past</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2 uppercase">Diverse bedrijven</h3>
              <p class="text-gray-600">Van startup tot multinational</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2 uppercase">Altijd actueel</h3>
              <p class="text-gray-600">Dagelijks nieuwe vacatures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { getAllVacancies } = useVacancies()
const loading = ref(true)
const featuredVacancies = ref([])

onMounted(async () => {
  const vacancies = await getAllVacancies()
  // Show latest 6 vacancies on homepage
  featuredVacancies.value = vacancies.slice(0, 6)
  loading.value = false
})
</script>

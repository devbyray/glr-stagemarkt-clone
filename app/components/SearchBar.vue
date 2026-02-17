<template>
  <div class="w-full max-w-2xl">
    <form @submit.prevent="handleSearch" class="flex gap-2">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Zoek op functie, bedrijf of locatie..."
        class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <button
        type="submit"
        class="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
      >
        Zoeken
      </button>
    </form>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const router = useRouter()

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: { q: searchQuery.value }
    })
  }
}
</script>

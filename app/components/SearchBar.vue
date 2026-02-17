<template>
  <div class="w-full max-w-2xl">
    <form @submit.prevent="handleSearch" class="flex gap-2">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Zoek op functie, bedrijf of locatie..."
        class="flex-1 px-4 py-3 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
      <button
        type="submit"
        class="px-6 py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors uppercase"
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

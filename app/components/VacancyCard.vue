<template>
  <NuxtLink
    :to="`/vacancies/${vacancy.id}`"
    class="block bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Image with Date Overlay -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img 
        :src="vacancy.image" 
        :alt="vacancy.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-4 right-4 bg-black text-white px-3 py-1.5 text-xs font-bold uppercase">
        {{ formatDate(vacancy.postedDate) }}
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-2xl font-black uppercase text-gray-900 mb-3 leading-tight">
        {{ vacancy.title }}
      </h3>
      
      <p class="text-gray-700 mb-3 line-clamp-3">
        {{ vacancy.description }}
      </p>
      
      <div class="text-sm text-gray-600">
        {{ vacancy.company }} • {{ vacancy.location }}
      </div>
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
  const day = date.getDate()
  const months = ['JANUARI', 'FEBRUARI', 'MAART', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AUGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER']
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

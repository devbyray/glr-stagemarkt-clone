export const useVacancies = () => {
  /**
   * Fetch all vacancies from the API
   */
  const getAllVacancies = async () => {
    try {
      const data = await $fetch('/api/vacatures')
      return data
    } catch (error) {
      console.error('Error fetching vacancies:', error)
      return []
    }
  }

  /**
   * Search vacancies by query string
   * Searches in title, company, location, and description
   */
  const searchVacancies = async (query) => {
    if (!query || query.trim() === '') {
      return await getAllVacancies()
    }

    try {
      const allVacancies = await $fetch('/api/vacatures')
      const searchTerm = query.toLowerCase()
      
      return allVacancies.filter(vacancy => {
        return (
          vacancy.title.toLowerCase().includes(searchTerm) ||
          vacancy.company.toLowerCase().includes(searchTerm) ||
          vacancy.location.toLowerCase().includes(searchTerm) ||
          vacancy.description.toLowerCase().includes(searchTerm)
        )
      })
    } catch (error) {
      console.error('Error searching vacancies:', error)
      return []
    }
  }

  /**
   * Get a single vacancy by ID
   */
  const getVacancyById = async (id) => {
    try {
      const data = await $fetch(`/api/vacatures/${id}`)
      return data
    } catch (error) {
      console.error('Error fetching vacancy:', error)
      return null
    }
  }

  return {
    getAllVacancies,
    searchVacancies,
    getVacancyById
  }
}

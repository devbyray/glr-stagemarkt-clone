import type { Vacancy } from '~/server/types'

export const useVacancies = () => {
  /**
   * Fetch all vacancies from the API
   */
  const getAllVacancies = async (): Promise<Vacancy[]> => {
    try {
      const data = await $fetch<Vacancy[]>('/api/vacatures')
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
  const searchVacancies = async (query: string): Promise<Vacancy[]> => {
    if (!query || query.trim() === '') {
      return await getAllVacancies()
    }

    try {
      const allVacancies = await $fetch<Vacancy[]>('/api/vacatures')
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
  const getVacancyById = async (id: number): Promise<Vacancy | null> => {
    try {
      const data = await $fetch<Vacancy>(`/api/vacatures/${id}`)
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

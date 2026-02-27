import { vacatures } from '../../data'
import type { Vacancy } from '../../types'

export default defineEventHandler((event): Vacancy => {
  const id = parseInt(event.context.params?.id || '0')
  
  const vacancy = vacatures.find(v => v.id === id)
  
  if (!vacancy) {
    throw createError({
      statusCode: 404,
      message: 'Vacancy not found'
    })
  }
  
  return vacancy
})

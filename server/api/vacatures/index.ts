import { vacatures } from '../../data'
import type { Vacancy } from '../../types'

export default defineEventHandler((): Vacancy[] => {
  return vacatures
})

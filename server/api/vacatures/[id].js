import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id)
  
  // Read the db.json file
  const dbPath = path.join(process.cwd(), 'server', 'db.json')
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
  
  const vacancy = data.vacatures.find(v => v.id === id)
  
  if (!vacancy) {
    throw createError({
      statusCode: 404,
      message: 'Vacancy not found'
    })
  }
  
  return vacancy
})

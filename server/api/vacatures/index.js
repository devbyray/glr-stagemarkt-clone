import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  // Read the db.json file
  const dbPath = path.join(process.cwd(), 'server', 'db.json')
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
  
  return data.vacatures
})

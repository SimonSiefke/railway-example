import express from 'express'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use('/static', (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  next()
})

app.use(express.static(path.join(__dirname, '../public')))

app.use((req, res, next) => {
  res.status(404)
  res.send('not found')
})

export { app }

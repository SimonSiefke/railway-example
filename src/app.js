import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const date = new Date().toString()
  res.set('Cache-Control', 'public, max-age=31536000')
  res.send('hello world')
})

export { app }

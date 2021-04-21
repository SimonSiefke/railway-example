import express from 'express'

const app = express()

app.get('/', (req, res) => {
  // const date = new Date().toString()
  // res.set('Cache-Control', 'public, max-age=31536000')
  res.status(200)
  res.send('hello world')
})

app.use((req, res, next) => {
  res.status(404)
  res.send('not found')
})

export { app }

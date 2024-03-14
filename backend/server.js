const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()) // Middleware for parsing JSON bodies

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

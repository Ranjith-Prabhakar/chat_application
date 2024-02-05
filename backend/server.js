const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ origin: "http://localhost:5173", credentials: true }))

const chats = require('./data/data')

app.get('/api/chats', (req, res) => {
  console.log(chats)
  res.json(chats)
})
app.listen(PORT, () => console.log(`server has connected on ${PORT}`))
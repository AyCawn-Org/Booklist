const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

console.log(PORT)

app.listen(PORT, console.log(`Server running on port: ${PORT}`))
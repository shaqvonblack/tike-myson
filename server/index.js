const express = require('express')
const app = express()
const cors = require('cors')

const drinkRoute = require('./routes/drink')


const PORT = 3001
app.use(cors())
app.use('/drink', drinkRoute)

app.listen(PORT, () => {
    console.log('server running in ' + PORT)
})
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

//TOP LEVEL MIDDLEWARE
app.use(express.json())

//ENDPOINTS
app.get('/api/houses', ctrl.getAllHouses) //Gets all houses
app.post('/api/houses', ctrl.addNewHouse)

//CONNECTION TO DATABASE
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

//LISTENER
app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

//TOP LEVEL MIDDLEWARE
app.use(express.json())

//ENDPOINTS
app.get('/api/properties', ctrl.getAllHouses) //Gets all properties
app.post('/api/properties', ctrl.addNewHouse) //Adds new property
app.delete('/api/properties/:id', ctrl.deleteHouse) //Deletes a property

//CONNECTION TO DATABASE AND LISTENER
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
})
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const faker = require('faker')

const app = express()

/**
 * Context to the MongoDb
 */
mongoose.connect('mongodb://database/load-test')

app.post('/api/users/create', (req, res) => {

    const users = []

    for (let i = 0; i < 5000; i++) {

        users.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        })

    }

    User.create(users, function (error) {
        if (error) return res.send({ error: true })
        res.send({ error: false })
    })

})

app.get('/api/users', (req, res) => {
    User.find({}, {}, { limit: 25 }, function (error, document) {
        if (error) return res.send({ error: true })
        res.send({ document })
    })
})

app.listen(8000, () => console.log('App listening on port 8000!'))

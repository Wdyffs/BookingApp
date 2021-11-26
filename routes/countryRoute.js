const express = require('express')
const Country = require('../models/country')
const router = express.Router()


router
  .get('/country', async (req, res) => {
    try {
      const country = new Country({ name: 'Jonny' })
      country.save()
      const countries = await Country.find()
      res.send(countries)
      // res.send(country)
    } catch (e) {
      res.status(404)
      console.log('Error: ', e)
    }
  })
  .post('/', async (req, res) => {
    res.send('Hello')
  })





// .post('/countries', async (req, res) => {
//   const country = new Country({ name: 'California' })
//   console.log('Jenya horishi')
//   await country.save()
//   res.send({ data: country })
// }) //--- its for sending data
// .put('/countries', async (req, res) => {
//   res.send('Update country')
// })

module.exports = router

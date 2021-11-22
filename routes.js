const express = require('express')
const Country = require('./models/country')
const router = express.Router()

router.get('/countries', async (req, res) => {
  try {
    const countries = await Country.find()
    res.send(countries)
  } catch (e) {
    res.status(404)
    console.log('Error: ', e)
  }
})

// router.post('/countries', async (req, res) => {
//   const country = new Country({
//     name: req.body.name
//   })
//   await country.save()
//   res.send(country)
// }) //--- its for sending data



module.exports = router

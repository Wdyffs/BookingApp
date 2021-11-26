const express = require('express')
const Country = require('../models/country')
const countryController = require('../controllers/countryController')
const router = express.Router()


router.get('/country', countryController.findCountries)
router.get('/country/:id', countryController.findOneCountry)
router.post('/country', countryController.createCountry)
router.patch('/country/:id', countryController.updateCountry)
router.delete('/country/:id', countryController.deleteCountry)

module.exports = router

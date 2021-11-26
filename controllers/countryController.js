const Country = require("../models/country")

exports.findCountries = async (req, res) => {
  try {
    const countries = await Country.find()
    res.send(countries)
  } catch (e) {
    res.status(404)
    console.log('Error: ', e)
  }
}

exports.findOneCountry = async (req, res) => {
  try {
    const country = await Country.findById({ _id: req.params.id })
    res.send(country)
  } catch (e) {
    res.status(404)
    res.send({ error: 'Country does not exist' })
  }
}

exports.createCountry = async (req, res) => {
  try {
    const country = new Country({
      name: req.body.name
    })

    await country.save()
    res.send(country)
  } catch (err) {
    console.log(err)
  }
}

exports.updateCountry = async (req, res) => {
  try {
    const country = await Country.findById({ _id: req.params.id })
    Object.assign(country, req.body)
    country.save()
    res.send(country)
  } catch (e) {
    res.status(404)
    res.send({ error: 'Country does not exist' })
  }
}

exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findById({ _id: req.params.id })
    await country.remove()
    res.send({ data: true })
  } catch (e) {
    res.status(404)
    res.send({ error: 'Country does not exist' })
  }
}
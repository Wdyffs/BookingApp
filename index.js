const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000;

const app = express()

async function start() {
  try {
    await mongoose.connect('mongodb+srv://kiryl_sandryhaila:1q2w3e4r@cinema.bu0eo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })

  } catch (e) {
    console.log(e)
  }
}


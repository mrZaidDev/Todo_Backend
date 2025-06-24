const mongoose = require('mongoose')

const connectingDB = async (dbURI) => {
  try {
    await mongoose.connect(dbURI)
    return console.log('DB Connected...')
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectingDB
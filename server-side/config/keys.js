const mongoose = require('mongoose');
require('dotenv').config();


const MongoServer = async (server) => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('Database connected')

  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = { MongoServer }
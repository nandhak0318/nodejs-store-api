require('dotenv').config()

const connectDB = require('./db/connect')
const { validate } = require('./models/product')

const product = require('./models/product')

const json = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    json.forEach(async (val) => {
      await product.create(val)
    })
  } catch (err) {
    console.log(err)
  }
}

start()

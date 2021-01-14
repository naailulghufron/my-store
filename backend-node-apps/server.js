import express from 'express'
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'

dotenv.config()
const mongodbUrl = config.MONGODB_URL

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason))

const app = express()
app.use("/api/users", userRoute)
app.get('/', function (req, res) {
  res.send('hello world')
})
// app.get("/api/products", (req, res) => {
//   res/RTCDtmfSender(data.products)
// })
app.listen(5000, () => { console.log("Server running port 5000") })
import express from 'express'

const app = express()

// app.get("/api/products", (req, res) => {
//   res/RTCDtmfSender(data.products)
// })
app.listen(5000, () => { console.log("Server running port 5000") })
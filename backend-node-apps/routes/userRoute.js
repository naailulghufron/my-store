import express from 'express'
import User from '../models/userModel'
// import Route from '../routes/userRoute'

const router = express.Router()

router.get("/createadmin", async (req, res) => {
  // res.send('hello createadmin update not realtime')
  try {
    const user = new User({
      name: "Ale",
      email: "ale.123@gmal.com",
      password: "12345",
      isAdmin: true
    })
    const newUser = await user.save()
    res.send(newUser)
    // res.send('hello createadmin update not realtime')
  } catch (error) {
    res.send({ msg: error.message })
  }
})

export default router
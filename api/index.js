require("dotenv").config()
const express = require("express")
const cors = require("cors")
const Pusher = require("pusher")
const mongoose = require("mongoose")
require("./db")

// Routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")

// Variables
const app = express()
const PORT = process.env.PORT || 5000

// Pusher config
const pusher = new Pusher({
  appId: "1282742",
  key: "b6b0b80f1b41c16c1981",
  secret: "345819505b1ddfb28bdb",
  cluster: "mt1",
  useTLS: true,
})
mongoose.connection.once("open", () => {
  const changeStream = mongoose.connection.collection("posts").watch()

  changeStream.on("change", (change) => {
    console.log("Change")
    if (change.operationType === "insert") {
      const postDetails = change.fullDocument
      pusher.trigger("posts", "inserted", {
        ...postDetails,
      })
    } else {
      console.log("Error triggering pusher")
    }
  })
})

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { pusher }

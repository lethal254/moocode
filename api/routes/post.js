const express = require("express")
const { verifyToken } = require("../Middleware/authmiddleware")
const Post = require("../models/Post")

const router = express.Router()

router.post("/new", verifyToken, async (req, res) => {
  try {
    const post = await Post.create({ creator: req.user.id, ...req.body })
    if (post) {
      res.status(201).json(post)
      return
    }
    res.status(500).json("Something went wrong")
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("creator")
      .exec()
    if (posts) {
      res.status(200).json(posts)
      return
    }
    res.status(500).json("Something went wrong retrieving posts")
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router

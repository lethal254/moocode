import { API_URL } from "../../config"
import axios from "axios"
import cookie from "cookie"

const login = async (req, res) => {
  // Checking the request type i.e should be a POST  and then make our api call to the backend
  if (req.method === "POST") {
    const { email, password } = req.body
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password },
        config
      )

      // Setting the cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, //1 week
          sameSite: "strict",
          path: "/",
        })
      )

      res.status(200).send(data)
    } catch (error) {
      res.status(500).send("error")
      console.log(error)
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

export default login

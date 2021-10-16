import { API_URL } from "../../config"
import axios from "axios"
import cookie from "cookie"

const signup = async (req, res) => {
  // Checking the request type i.e should be a POST  and then make our api call to the backend
  if (req.method === "POST") {
    const { email, fullName, username, password } = req.body
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/signup`,
        { email, fullName, username, password },
        config
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

export default signup

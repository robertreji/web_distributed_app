import { useState } from "react"
import * as sdk from "matrix-js-sdk"

export default function Signup() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  async function handleSignup() {
    try {
      const baseUrl = "https://matrix.org"

      // 1️⃣ Create unauthenticated client
      const client = sdk.createClient({ baseUrl })

      // 2️⃣ Register user
      const response = await client.register(
        username,      // localpart only (no @, no server)
        password,
        null,
        { type: "m.login.dummy" } // simplest auth type
      )

      // 3️⃣ Save credentials
      localStorage.setItem("matrixToken", response.access_token)
      localStorage.setItem("matrixUserId", response.user_id)

      setMessage("Signup successful ✅")

      console.log("User ID:", response.user_id)
      console.log("Access Token:", response.access_token)

    } catch (err) {
      console.error("Signup failed:", err)
      setMessage("Signup failed ❌")
    }
  }

  return (
    <div style={styles.container}>
      <h2>Matrix Signup</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleSignup} style={styles.button}>
        Sign Up
      </button>

      <p>{message}</p>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px"
  },
  input: {
    margin: "8px",
    padding: "8px",
    width: "250px"
  },
  button: {
    marginTop: "10px",
    padding: "8px 20px",
    cursor: "pointer"
  }
}
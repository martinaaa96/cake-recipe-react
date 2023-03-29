import { useContext } from "react"

import { AuthContext } from "./contexts/AuthContext"

export default function Login() {


  const { onLoginSubmit } = useContext(AuthContext)
  return (
    <section>
      <div className="login-container">

        <h2>Login Form</h2>
        <form onSubmit={onLoginSubmit} method="post">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="marti@gmail.com" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <input type="submit" value="Login" />
        </form>
        <div className="error-message"></div>
        <div className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </div>
    </section>
  )
}
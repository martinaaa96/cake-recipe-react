
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../contexts/AuthContext"

import { useForm } from "../../hooks/useForm"
export default function Login() {

  const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
  }

  const { onLoginSubmit } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',

  }, onLoginSubmit);


  return (
    <section>
      <div className="login-container" id='auth'>

        <h2>Login Form</h2>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="marti@gmail.com"
            values={values[LoginFormKeys.Email]}
             onChange={changeHandler} />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name={LoginFormKeys.Password}
            values={values[LoginFormKeys.Password]}
             onChange={changeHandler} />

          <input type="submit" value="Login" />
        </form>
        <div className="error-message"></div>
        <div className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </section>
  )
}
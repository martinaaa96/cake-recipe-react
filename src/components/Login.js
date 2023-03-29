import { useContext } from "react"
import {Link} from 'react-router-dom'
import { AuthContext } from "./contexts/AuthContext"

import { useForm } from "../hooks/useForm"
export default function Login() {

  const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
  }

  const { onLoginSubmit } = useContext(AuthContext);

  const {values, changeHandler,onSubmit} = useForm({
    [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

  },onLoginSubmit);


  return (
    <section>
      <div className="login-container" id='auth'>

        <h2>Login Form</h2>
        <form  method="POST" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
          type="text" 
          id="email" 
          name={LoginFormKeys.Email}
          placeholder="marti@gmail.com"
          values={values.email} 
          onChange={changeHandler}/>

          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name={LoginFormKeys.Password}
          values={values.password}
          onChange={changeHandler}/>

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
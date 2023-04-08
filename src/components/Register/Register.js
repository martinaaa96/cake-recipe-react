import { useContext } from "react";
import { Link } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";
import '../../styles/register.css'

export default function Register() {

  const { onRegisterSubmit } = useContext(AuthContext)

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    repeatPassword: '',

  }, onRegisterSubmit)

  return (
    <section>
      <div className="register-container">
        <h2>Register Form</h2>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="marti@gmail.com" 
            value={values.email}
            onChange={changeHandler}/>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler} />

          <label htmlFor="repeat-password">Repeat Password:</label>
          <input
            type="password"
            id="repeat-password"
            name="repeatPassword" 
            value={values.repeatPassword}
            onChange={changeHandler}/>

          <input type="submit" value="Register" />
        </form>
        
        <div className="login-link">
          You already have an account - <Link to="/login"> Login here</Link>
        </div>

      </div>
    </section>

  )
}
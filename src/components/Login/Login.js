import '../../styles/login.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../contexts/AuthContext"

import { useForm } from "../../hooks/useForm"
export default function Login() {

  

  const { onLoginSubmit} = useAuthContext();

  
  const { values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',

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
            name="email"
            placeholder="marti@gmail.com"
            values={values.email}
             onChange={changeHandler} />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            values={values.password}
             onChange={changeHandler} />

          <input type="submit" value="Login" />
        </form>
       
        <div className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
        
      </div>
    </section>
  )
}
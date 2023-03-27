export default function Register(){

    return (
        <section>
    <div className="register-container">
      <h2>Register Form</h2>
      <form action="" method="post"> 
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  placeholder="marti@gmail.com"/>
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />
        
        <input type="submit" value="Register"/>
      </form>
      <div className="register-link">
        You already have an account<a href="/login"> Login here</a>
      </div>
      <div className="error-message"></div>
    </div>
    </section>
       
    )
}
export default function Login(){

    return (
		<section>
        <div className="login-container">
        
      <h2>Login Form</h2>
      <form action="" method="post">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="marti@gmail.com" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <input type="submit" value="Login"/>
      </form>
      <div className="error-message"></div>
	  <div class="register-link">
        Don't have an account? <a href="/register">Register here</a>
      </div>
    </div>
        </section>
    )
}
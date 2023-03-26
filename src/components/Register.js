export default function Register(){

    return (
        <section>
    <div className="register-container">
      <h2>Register Form</h2>
      <form action="" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"/>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />
        
        <input type="submit" value="Register"/>
      </form>
      <div className="error-message"></div>
    </div>
    </section>
       
    )
}
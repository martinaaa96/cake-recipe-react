export default function Login(){

    return (
        <section id="billboard">
	<div className="main-slider">
		
		<div className="slider-item ">
			
			<figure>
				<img src="images/banner1.jpg"/>
			</figure>
			
			<div className="text-content col-md-8" >
				<legend className="text-center "> <h4>Login Form </h4></legend>
				<h2 className="text-uppercase colored padding-xsmall">
					<p className="field">
					<label htmlFor="email">Email</label>
					<span className="input">
						<input type="text" name="email" id="email" placeholder="Email"/>
					</span>
				</p> 
				<p className="field">
					<label htmlFor="password">Password</label>
					<span className="input">
						<input type="password" name="password" id="password" placeholder="Password"/>
					</span>
				</p></h2>
				
				<div className="pix_btn">
					<input className="button submit" type="submit" value="Login"/>
				</div>
			</div>
		</div>
		</div>
</section>
    )
}
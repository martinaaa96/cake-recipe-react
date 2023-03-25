export default function CreateProduct(){

    return(
        <section id="billboard"> 
	<div className="main-slider">
		<div className="slider-item ">
			<figure>
				<img src="images/banner1.jpg"/>
			</figure>
			<div className="text-content col-md-8" >
			<form className="text-center"> <h4>Add new cake </h4></form>
			<p className="field">
				<span className="input">
					<input type="text" name="title" id="title" placeholder="Title"/>
				</span>
			</p>
			<p className="field">
				<span className="input">
					<textarea name="description" id="description" placeholder="Description"></textarea>
				</span>
			</p>
			<p className="field">	
				<span className="input">
					<input type="text" name="imageUrl" id="image" placeholder="Image"/>
				</span>
			</p>
			<input class="button submit" type="submit" value="Add Cake"/>
		
        

</div>
</div>
</div>
</section>
    )
}
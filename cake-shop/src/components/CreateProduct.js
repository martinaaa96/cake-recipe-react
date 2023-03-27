export default function CreateProduct(){

    return(
		<section>
		<div className="product-container">
		   <h2>Add Product Form</h2>
		   <form action="" method="post">
			 <label for="name">Product Name:</label>
			 <input type="text" id="name" name="name" />
			 
			 <label for="description">Product Description:</label>
			 <textarea id="description" name="description"></textarea>
			 
			 <label for="price">Product Price:</label>
			 <input type="number" id="price" name="price"/>
			 
			 <label for="image">Product Image:</label>
			 <input type="text" id="image" name="image" />
			 
			 <input type="submit" value="Add Product"/>
		   </form>
		   <div className="error-message"></div>
		 </div>
		</section>
    )
}
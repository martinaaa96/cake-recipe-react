export default function CreateProduct(){

    return(
		<section>
		<div className="product-container">
		   <h2>Add Product Form</h2>
		   <form action="" method="post">
			 <label htmlFor="name">Product Name:</label>
			 <input type="text" id="name" name="name" value=""/>
			 
			 <label htmlFor="description">Product Description:</label>
			 <textarea id="description" name="description" value=""></textarea>
			 
			 <label htmlFor="price">Product Price:</label>
			 <input type="number" id="price" name="price" value=""/>
			 
			 <label htmlFor="image">Product Image:</label>
			 <input type="text" id="image" name="image" value=""/>
			 
			 <input type="submit" value="Add Product"/>
		   </form>
		   <div className="error-message"></div>
		 </div>
		</section>
    )
}
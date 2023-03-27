export default function Details() {

    return (
        <section>
<div className="product-container">
      <h2>Product Details</h2>
      <form action="" method="post">
      <img className="product-image" src="images/cake-item1.jpg"/>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value=" Black Forest Pastry"/>
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description">Description: The pastry is also a dessert that is primarily made using flour,
        butter and water.</textarea>
        
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value=" $12"/>
      
      </form>
      <div className="edit-delete-container">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
      <div className="error-message"></div>
    </div>
</section>
    )
}

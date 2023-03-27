export default function Edit(){

    return ( 
        <section>
        <div className="product-container">
              <h2>Edit product</h2>
              <form action="" method="post">
              <label htmlFor="cake-image">Image:</label>
              <input type="text" id="imageUrl" name="imageUrl" value=""/>
             
                <label htmlFor="name">Product Name:</label>
                <input type="text" id="name" name="name" value=""/>
                
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value=""></textarea>
                
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value=""/>
              
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
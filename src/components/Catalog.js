export default function Catalog(){

    return (
        <section className="best-products margin-large">
			<div className="container">
					<h2 className="section-title text-center mb-4">Products</h2>
				<div className="d-flex products-slider">
						<div className="product-item col-md-3 pl-0">
                        <ul class="list-group">
                <h4 className="pt-4">Black Forest Pastry</h4>
                <p>Description: The pastry is also a dessert that is primarily made using flour, butter and water.  </p>
                    <span className="price colored">Price: $12</span>
                    <p class="img "><img src="images/cake-item1.jpg"/></p>
                    <button type="submit"  className="button">Details</button>
                </ul>
						</div>
				
					<p>No cakes added!</p>
				</div>
			</div>
		</section>   
    )
}


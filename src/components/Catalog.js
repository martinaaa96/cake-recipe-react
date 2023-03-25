export default function Catalog(){

    return (
        <section className="best-products margin-large">
			<div className="container">
					<h2 className="section-title text-center mb-4">Products</h2>
				<div className="row">
				<div className="d-flex products-slider">
		
						<div className="product-item col-md-3 pl-0">
							<a href="single-product.html" className="product-image"><img src="images/cake-item1.jpg"/></a>
							<div className="text-comtent text-center text-hover">
								<h5 className="pt-4"><a href="single-product.html">Black Forest Pastry</a></h5>
								<span className="price colored">Price: $12</span>
								<p>Cake - Pastries</p>
								<button type="submit" name="add-to-cart" value="27545" className="button">Details</button>
								
								
							</div>
						</div>
						
					</div>
					
					<p>No cakes added!</p>
				</div>
			</div>
		</section>   
    )
}
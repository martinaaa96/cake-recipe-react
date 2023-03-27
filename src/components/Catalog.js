export default function Catalog(){

    return (
        <section>
        <h2 className="section-title text-center mb-4">Products</h2>
        <div className="product-catalog">
          <div className="product">
            <img src="images/cake-item1.jpg" />
            <h4 className="pt-4">Black Forest Pastry</h4>
            <p>Description: The pastry is also a dessert that is primarily made using flour, butter and water.</p>
            <span className="price colored">Price: $12</span>
            <div className="pix_btn">
              <a className="btn-hvr-effects mt-3">Details</a>
            </div>
         
          
          
          </div>
          <h4 className="pt-4">No Cakes yet</h4>

        </div>
      </section>
    )
}


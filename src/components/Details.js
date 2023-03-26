export default function Details() {

    return (
        <section id="billboard">
            <div className="main-slider">

                <div className="slider-item">
                    <figure>
                        <img src="images/banner1.jpg" />
                    </figure>

                    <div className="text-content col-md-8">
                        <ul class="list-group">
                            <h4 className="pt-4">Black Forest Pastry</h4>
                            <p>Description: The pastry is also a dessert that is primarily made using flour, butter and water.  </p>
                            <span className="price colored">Price: $12</span>
                            <p class="img "><img src="images/cake-item1.jpg" /></p>
                            <a className="btn-hvr-effects mt-3">Edit</a>
                            <a className="btn-hvr-effects mt-3">Delete</a>
                            
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

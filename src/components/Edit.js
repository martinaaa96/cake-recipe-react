export default function Edit(){

    return ( 
    <section id="billboard">
    <div className="main-slider">
        <div className="slider-item">
            <figure>
                <img src="images/banner1.jpg"/>
            </figure>
           
            <div className="text-content col-md-8" >
			<form className="text-center"> <h4>Edit cake </h4></form>
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
     
                <a  className="btn-hvr-effects mt-3">Edit</a>
                <a  className="btn-hvr-effects mt-3">Delete</a>
            </p>
           
        </div>
        </div>
        </div>

</section>

)
}
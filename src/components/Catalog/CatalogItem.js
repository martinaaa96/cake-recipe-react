export default function CatalogItem({
    name,
    description,
    image,
    price
}){
    return (
        <div className="product-catalog">
          <div className="product">
            <img src={image} />
            <h4 className="pt-4">{name}</h4>
            <p>Description: {description}</p>
            <span className="price colored">Price: ${price}</span>
            <div className="pix_btn">
              <a className="btn-hvr-effects mt-3">Details</a>
            </div>
            </div>
            </div>
    )
}
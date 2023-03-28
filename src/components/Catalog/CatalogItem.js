import { Link } from 'react-router-dom'

export default function CatalogItem({
  _id,
  name,
  description,
  time,
  image,
}) {
  return (
    <div className="product-catalog">
      <div className="product">
        <img src={image} />
        <h4 className="pt-4">{name}</h4>
       
        <div className="pix_btn">
          <Link to={`/catalog/${_id}`} className="btn-hvr-effects mt-3">Details</Link>
        </div>
      </div>
    </div>
  )
}
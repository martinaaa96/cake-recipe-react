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
          <span className="like-text">Like</span>
        </div>
        <button className="like-button">
          <span className="heart-icon" src="images/icon-heart.png"></span>
          <span className="like-text">Like</span>
        </button>
      </div>
    </div>
  )
}
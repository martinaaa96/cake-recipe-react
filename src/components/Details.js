import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as cakeService from '../services/cakeService'

export default function Details() {

  const { cakeId } = useParams();
const [cake, setCake] = useState({});

  useEffect(()=>{

    cakeService.getOne(cakeId)
    .then(result =>{
setCake(result)
    })

  },[cakeId])

  return (
    <> 
    <h2>Product Details</h2>
    <section>
      <div className="product-container">
      <h3 className="name">{cake.name}</h3>
        <div className="container">
	
		<img className="image" src={cake.image}/>
		<p className="description">Recipe: {cake.description}</p>
		<p className="time">Cooking time: {cake.time}</p>
	</div>
        <div className="edit-delete-container">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
        <div className="error-message"></div>
      </div>
    </section>
    </>
  )
}

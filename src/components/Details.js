import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../hooks/useService";
import { cakeServiceFactory } from '../services/cakeService'

export default function Details() {

  const { cakeId } = useParams();
  const [cake, setCake] = useState({});

  const cakeService = useService(cakeServiceFactory);


  useEffect(() => {

    cakeService.getOne(cakeId)
      .then(result => {
        setCake(result)
      })

  }, [cakeId])

  return (
    <>
      <h2>Product Details</h2>
      <section>
        <div className="product-container">
          <h4 className="pt-4">{cake.name}</h4>
          <img className="image" src={cake.image} />
          <p>Recipe: {cake.description} </p>
          <h5><span className="time colored">Cooking time: {cake.time}</span></h5>

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

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../hooks/useService";
import { cakeServiceFactory } from '../services/cakeService'
 import { AuthContext } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Details() {

  const {userId} = useContext(AuthContext);

  const { cakeId } = useParams();
  const [cake, setCake] = useState({});

  const cakeService = useService(cakeServiceFactory);

  const navigate = useNavigate();


  useEffect(() => {

    cakeService.getOne(cakeId)
      .then(result => {
        setCake(result)
      })

  }, [cakeId])


  const isOwner = cake.__ownerId === userId;

  const onDeleteClick =  async () => {

 await  cakeService.remove(cake._id)

 // delete from state
 
 navigate('/catalog');

  
  }
  return (
    <>
      <h2>Product Details</h2>
      <section>
        <div className="product-container">
          <h4 className="pt-4">{cake.name}</h4>
          <img className="image" src={cake.image} />
          <p>Recipe: {cake.description} </p>
          <h5><span className="time colored">Cooking time: {cake.time}</span></h5>
{isOwner && (
 <div className="edit-delete-container">
 <button className="edit-button">Edit</button>
 <button className="delete-button" onClick={onDeleteClick}>Delete</button>
</div>
)}
   <div className="error-message"></div>
        </div>
      </section>
    </>
  )
}

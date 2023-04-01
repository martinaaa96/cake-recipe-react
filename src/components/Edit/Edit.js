import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useService } from '../../hooks/useService'

import { cakeServiceFactory } from '../../services/cakeService';

export default function Edit({
  onCakeEditSubmit,
}) 
{

  const { cakeId } = useParams();
  const cakeService = useService(cakeServiceFactory);

  const { values, changeHandler, onSubmit, changeValues } = useForm({
    _id:'',
    image: '',
    name: '',
    description: '',
    time: '',

  }, onCakeEditSubmit);

 
  useEffect(() => {

    cakeService.getOne(cakeId)
      .then(result => {

        changeValues(result);

      })

  },[cakeId]);
 

  return (
    <section>
       <h2>Edit product</h2>
      <div className="product-container">
        <form id="edit" onSubmit={onSubmit} method="POST">
          <label htmlFor="cake-image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={values.image} 
            onChange={changeHandler}
            />

          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name} 
            onChange={changeHandler}
            />

          <label htmlFor="description">Product Recipe</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={changeHandler}

          ></textarea>

          <label htmlFor="time">Cooking time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={values.time}
            onChange={changeHandler}

          />

        </form>
        <button className="btn-hvr-effects mt-3 " type="submit">Save Changes</button>
      </div>
    </section>
  )
}
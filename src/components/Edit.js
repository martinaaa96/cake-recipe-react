import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useService } from '../hooks/useService'

import { cakeServiceFactory } from '../services/cakeService';

export default function Edit({
  onCakeEditSubmit,
}) {

  const { cakeId } = useParams();
  const cakeService = useService(cakeServiceFactory);

  const { values, changeHandler, onSubmit, changeValues } = useForm({
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

  },[]);
  

  return (
    <section>
      <div className="product-container">
        <h2>Edit product</h2>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor="cake-image">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="image"
            value={values.image} />

          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name} />

          <label htmlFor="description">Product Recipe</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
          ></textarea>

          <label htmlFor="time">Cooking time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={values.time}
          />

        </form>
      </div>
    </section>
  )
}
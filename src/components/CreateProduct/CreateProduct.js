import { useState } from "react"



export default function CreateProduct({
	onCakeCreateSubmit,


}) {

	const [values, setValues] = useState({
		name: '',
		description: '',
		time: null,
		image: '',

	})

	const onChangeHandler = (e) => {
		setValues(state => ({ ...state, [e.target.name]: e.target.value }))
	}

	const onSubmit = (e) => {
		e.preventDefault();

		onCakeCreateSubmit(values);

	}
	return (
		<section>
			<div className="product-container">
				<form id="create" onSubmit={onSubmit} method="post">
					<h2>Create Cake</h2>


					<label htmlFor="name">Product Name:</label>
					<input value={values.name} onChange={onChangeHandler} type="text" id="name" name="name" />

					<label htmlFor="description">Product Recipe:</label>
					<input value={values.description} onChange={onChangeHandler} type="text" id="name" name="name" />

					<label htmlFor="time">Cooking time :</label>
					<input value={values.time} onChange={onChangeHandler} type="number" id="time" name="time" />

					<label htmlFor="image">Product Image:</label>
					<input value={values.image} onChange={onChangeHandler} type="text" id="image" name="image" />

					<input type="submit" value="Add Product" />
				</form>
				<div className="error-message"></div>
			</div>
		</section>
	)
}
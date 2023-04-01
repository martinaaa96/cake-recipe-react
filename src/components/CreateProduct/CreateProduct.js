import { useForm } from "../../hooks/useForm"

export default function CreateProduct({
	onCakeCreateSubmit,
}) {
	const { values, changeHandler, onSubmit } = useForm({
		name: '',
		description: '',
		time: '',
		image: '',

	}, onCakeCreateSubmit);


	return (
		<section>
			<div className="product-container">
				<form id="create" onSubmit={onSubmit} method="POST">
					<h2>Create Cake</h2>
					<label htmlFor="name">Product Name:</label>
					<input 
					value={values.name} 
					onChange={changeHandler} 
					type="text" 
					id="name" 
					name="name" 
					/>

					<label htmlFor="time">Cooking time :</label>
					<input 
					value={values.time} 
					onChange={changeHandler} 
					type="number" 
					id="time" 
					name="time" 
					/>

					<label htmlFor="description">Product Recipe:</label>
					<textarea 
					value={values.description} 
					onChange={changeHandler} 
					type="text" 
					name="description" 
					id="description" 
					></textarea>

					<label htmlFor="image">Product Image:</label>
					<input 
					value={values.image} 
					onChange={changeHandler} 
					type="text" 
					id="image" 
					name="image"
					/>

					<input type="submit" value="Add Product" />
				</form>
			
			</div>
		</section>
	)
}
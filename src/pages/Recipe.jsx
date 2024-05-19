import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getMealById } from '../api'
import Preloader from '../components/Preloader/preloader'

const Recipe = () => {
	const { id } = useParams()
	const [recipe, setRecipe] = useState({})
	const { goBack } = useHistory()

	useEffect(() => {
		getMealById(id).then(data => setRecipe(data.meals[0]))
	}, [id])

	if (!recipe.idMeal) {
		return <Preloader />
	}

	const {
		strMeal,
		strCategory,
		strYoutube,
		strArea,
		strMealThumb,
		strInstructions
	} = recipe

	return (
		<>
			<div className='card'>
				<div className='card-image'>
					<img src={strMealThumb} alt={strMeal} />
				</div>
				<div className='card-content'>
					<span className='card-title'>{strMeal}</span>
					<h6>Category: {strCategory}</h6>
					{strArea ? <h6>Area: {strArea}</h6> : null}
					<p>{strInstructions}</p>

					<table className='centered striped'>
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(recipe).map(key => {
								if (key.includes('Ingredient') && recipe[key]) {
									return (
										<tr key={key}>
											<td>{recipe[key]}</td>
											<td>
												{
													recipe[
														`strMeasure${key.slice(
															13
														)}`
													]
												}
											</td>
										</tr>
									)
								}
								return null
							})}
						</tbody>
					</table>

					<div style={{ margin: '2rem 0 0' }}>
						<h6>Video Recipe</h6>
						{strYoutube ? (
							<div className='video-container'>
								<iframe
									title={id}
									src={`https://www.youtube.com/embed/${strYoutube.slice(
										-11
									)}`}
								/>
							</div>
						) : null}
					</div>
				</div>
			</div>
			<button className='btn' onClick={goBack}>
				Go back
			</button>
		</>
	)
}

export default Recipe

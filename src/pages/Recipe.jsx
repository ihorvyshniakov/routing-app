import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../api'
import Preloader from '../components/Preloader/preloader'

const Recipe = () => {
	const { id } = useParams()
	const [recipe, setRecipe] = useState({})

	useEffect(() => {
		getMealById(id).then(data => setRecipe(data.meals[0]))
	}, [id])

	if (!Object.keys(recipe).length) {
		return <Preloader />
	}

	const { strMeal, strMealThumb, strInstructions } = recipe

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{strMeal}</span>
				<p>{strInstructions}</p>
			</div>
		</div>
	)
}

export default Recipe

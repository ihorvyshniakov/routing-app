import { Link } from 'react-router-dom'
import { go } from '../../App'

const MealItem = ({ idMeal, strMeal, strMealThumb }) => {
	return (
		<div className='card lime lighten-4'>
			<Link to={go(`/meal/${idMeal}`)}>
				<div className='card-image'>
					<img src={strMealThumb} alt={strMeal} />
				</div>
			</Link>
			<div className='card-content'>
				<span className='card-title'>{strMeal}</span>
			</div>
		</div>
	)
}

export default MealItem

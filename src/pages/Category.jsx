import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader/preloader'
import MealList from '../components/MealList/mealList'
import { getFilteredCategory } from '../api'
import { useHistory } from 'react-router-dom'

const Category = () => {
	const { name } = useParams()
	const [meals, setMeals] = useState([])
	const { goBack } = useHistory()

	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals))
	}, [name])

	if (!meals.length) {
		return <Preloader />
	}

	return (
		<>
			<button className='btn' onClick={goBack}>
				Go back
			</button>
			<MealList meals={meals} />
		</>
	)
}

export default Category

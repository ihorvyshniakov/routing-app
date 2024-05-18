import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader/preloader'
import MealList from '../components/MealList/mealList'
import { getFilteredCategory } from '../api'

const Category = () => {
	const { name } = useParams()
	const [meals, setMeals] = useState([])

	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals))
	}, [name])

	if (!meals.length) {
		return <Preloader />
	}

	return <MealList meals={meals} />
}

export default Category

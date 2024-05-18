import { useEffect, useState } from 'react'
import { getAllCategories } from '../api'
import Preloader from '../components/Preloader/preloader'
import CategoryList from '../components/CategoryList'

const Home = () => {
	const [catalog, setCatalog] = useState([])
	useEffect(() => {
		getAllCategories().then(data => setCatalog(data.categories))
	}, [])

	if (!catalog.length) {
		return <Preloader />
	}

	return <CategoryList catalog={catalog} />
}

export default Home

import CategoryItem from '../CategoryItem/categoryItem'
import './categoryList.scss'

const CategoryList = ({ catalog = [] }) => {
	return (
		<div className='list'>
			{catalog.map(el => (
				<CategoryItem key={el.idCategory} {...el} />
			))}
		</div>
	)
}

export default CategoryList

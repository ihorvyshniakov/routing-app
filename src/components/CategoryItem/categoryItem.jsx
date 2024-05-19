import { Link } from 'react-router-dom'
import './categoryItem.scss'
import { go } from '../../App'

const CategoryItem = ({
	strCategory,
	strCategoryThumb,
	strCategoryDescription
}) => {
	return (
		<div className='card lime lighten-4'>
			<Link
				to={go(`/category/${strCategory}`)}
				style={{ color: 'black' }}
			>
				<div className='card-image waves-effect waves-block waves-light'>
					<img src={strCategoryThumb} alt={strCategory} />
				</div>
			</Link>
			<div className='card-content'>
				<span
					className='card-title activator grey-text text-darken-4'
					style={{ margin: '0' }}
				>
					{strCategory}
					<i className='material-icons right'>more_vert</i>
				</span>
			</div>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					{strCategory}
					<i className='material-icons right'>close</i>
				</span>
				<p>{strCategoryDescription.slice(0, 180)}...</p>
			</div>
		</div>
	)
}

export default CategoryItem

import {
	useParams,
	useHistory,
	useRouteMatch,
	useLocation
} from 'react-router-dom';

const Movie = () => {
	const { title } = useParams();
	const { goBack, goForward } = useHistory();
	const value = useRouteMatch();
	const value2 = useLocation();
	console.log('useRouteMatch: ', value);
	console.log('useLocation: ', value2);

	return (
		<>
			<button className='btn' onClick={goBack}>
				go back
			</button>
			<div>Movie {title}</div>
			<button className='btn' onClick={goForward}>
				go forward
			</button>
		</>
	);
};

export default Movie;

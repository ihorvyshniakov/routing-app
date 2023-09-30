import { useParams, useHistory } from 'react-router-dom';

const Movie = () => {
	const { title } = useParams();
	const { goBack, goForward } = useHistory();

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

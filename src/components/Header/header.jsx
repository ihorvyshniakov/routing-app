import { Link } from 'react-router-dom';
import { go } from '../../App';
import { ReactComponent as GithubSVG } from '../../assets/github.svg';
import './header.scss';

const Header = () => {
	return (
		<nav className='header'>
			<div className='nav-wrapper container'>
				<Link to={go('/')} className='brand-logo'>
					Routing app
				</Link>
				<ul id='nav-mobile' className='right'>
					<li>
						<Link to={go('/about')}>about</Link>
					</li>
					<li>
						<Link to={go('/contact')}>contact</Link>
					</li>
					<li>
						<a
							className='icon-link right'
							href='https://github.com/ihorvyshniakov/routing-app'
							target='_blank'
							rel='noreferrer'
						>
							<GithubSVG />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

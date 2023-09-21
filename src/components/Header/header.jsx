import { ReactComponent as GithubSVG } from '../../assets/github.svg';
import './header.scss';

const Header = () => {
	return (
		<nav className='header'>
			<div className='nav-wrapper container'>
				<a href='/' className='brand-logo'>
					Routing app
				</a>
				<ul id='nav-mobile' className='right'>
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

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const BASE_URL = '/routing-app';
const go = route => String(`${BASE_URL}${route}`);

function App() {
	return (
		<>
			<Header />
			<main className='container content'>
				<a href={go('/')}>home</a>
				<br />
				<a href={go('/about')}>about</a>
				<br />
				<a href={go('/contact')}>contact</a>
				<br />
				<a href={go('/any')}>not found</a>
				<Router>
					<Switch>
						<Route exact path={go('/')} component={Home} />
						<Route path={go('/about')} component={About} />
						<Route path={go('/contact')} component={Contact} />
						<Route path={go('/contact')} component={NotFound} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</main>
			<Footer />
		</>
	);
}

export default App;

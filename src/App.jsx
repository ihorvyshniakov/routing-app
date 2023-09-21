import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const go = route => String(`/routing-app${route}`);

function App() {
	return (
		<Router>
			<Header />
			<main className='container content'>
				<Switch>
					<Route exact path={go('/')} component={Home} />
					<Route path={go('/about')} component={About} />
					<Route path={go('/contact')} component={Contact} />
					<Route path={go('/any')} component={NotFound} />
					<Route component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;

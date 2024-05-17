import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Movie from './pages/Movie'

export const go = route => String(`/routing-app${route}`)

function App() {
	return (
		<Router>
			<Header />
			<main className='container content'>
				<Link to={go('/movies/Star Wars')}>movies</Link>
				<br />
				<Switch>
					<Route exact path={go('/')} component={Home} />
					<Route path={go('/about')} component={About} />
					<Route path={go('/contact')} component={Contact} />
					<Route path={go('/any')} component={NotFound} />
					<Route path={go('/movies/:title')} component={Movie} />
					<Route component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</Router>
	)
}

export default App

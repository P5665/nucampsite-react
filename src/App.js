import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import { Header, Footer } from './components';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

// Im keeping Container -- Container -> Row -> Col
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='contact'
					element={<ContactPage />}
				/>
				<Route
					path='directory'
					element={<CampsitesDirectoryPage />}
				/>
				<Route
					path='directory/:campsiteId'
					element={<CampsiteDetailPage />}
				/>
				<Route
					path='about'
					element={<AboutPage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

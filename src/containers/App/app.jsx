import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.css';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import ProductList from '../ProductList/productList';
import ProductDetails from '../ProductDetails/productDetails';

const routes = [
	{ path: '/', component: <ProductList />, name: 'product list' },
	{ path: '/product/:productID', component: <ProductDetails />, name: 'product details' },
]

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					{routes.map((route, index) => {
						return <Route
							path={route.path}
							element={route.component}
							key={`routes_${index}`}
						/>
					})}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

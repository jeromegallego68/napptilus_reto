import ProductList from './containers/ProductList/productList';
import ProductDetails from './containers/ProductDetails/productDetails';

export const routes = [
    { path: '/', component: <ProductList />, name: 'product list' },
    { path: '/product', component: <ProductList />, name: 'product list' },
    { path: '/product/:productID', component: <ProductDetails />, name: 'product details' },
]
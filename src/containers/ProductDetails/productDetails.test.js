import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductDetails from './productDetails';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('With React Testing Library', () => {
    const mockStore = configureStore();
    let store = mockStore({
        Cart: {},
        Product: {}
    });

    it('Expect to have an image', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>);

        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
    });

    it('Expect to have a description section', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>);

        const description = screen.getByTestId("product-details-description");
        expect(description).toBeInTheDocument();
    });

    it('Expect to have a actions section', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>);

        const actions = screen.getByTestId("product-details-actions");
        expect(actions).toBeInTheDocument();
    });

    it('Expect to have a link to come back to the product list', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/product');
    });
});

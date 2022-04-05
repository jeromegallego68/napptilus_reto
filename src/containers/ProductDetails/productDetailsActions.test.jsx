import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import ProductDetailsActions from './productDetailsActions';

describe('With React Testing Library', () => {
    const mockStore = configureStore();
    let store = mockStore({
        Cart: {},
        Product: {}
    });

    it('Expect to have selector for colors', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetailsActions /></BrowserRouter></Provider>);

        const colors = screen.getByTestId("product-details-actions-select-colors");
        expect(colors).toBeInTheDocument();
    });

    it('Expect to have selector for storages', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetailsActions /></BrowserRouter></Provider>);

        const storages = screen.getByTestId("product-details-actions-select-storages");
        expect(storages).toBeInTheDocument();
    });

    it('Expect to have a submit button', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetailsActions /></BrowserRouter></Provider>);

        const button = screen.getByTestId("product-details-actions-button-submit");
        expect(button).toBeInTheDocument();
    });

    it('Expect to disable submit button if one a both select value is null', () => {
        render(<Provider store={store}><BrowserRouter><ProductDetailsActions /></BrowserRouter></Provider>);

        const colorsValue = screen.getByTestId("product-details-actions-select-colors").value;
        expect(colorsValue).toBe("")

        const storagesValue = screen.getByTestId("product-details-actions-select-storages").value;
        expect(storagesValue).toBe("")

        const button = screen.getByTestId("product-details-actions-button-submit");
        expect(button).toHaveAttribute("disabled");
    });

    // TODO
    // eslint-disable-next-line jest/no-commented-out-tests
    // it('Expect to enable submit button if both select value are define', () => {
    // });

    // TODO
    // eslint-disable-next-line jest/no-commented-out-tests
    // it('Expect to submit form when clicking on submit button', () => {
    // });

    // TODO
    // eslint-disable-next-line jest/no-commented-out-tests
    // it('Expect to pre-select the value if only one', () => {
    // });
});

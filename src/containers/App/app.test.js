import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './app';

import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
	const mockStore = configureStore();
	let store = mockStore({
		Cart: {},
		Product: {}
	});

	it('Render header', () => {
		render(<Provider store={store}><App /></Provider>);

		const header = screen.getByRole("banner");
		expect(header).toBeInTheDocument();
	});

	it('Render footer', () => {
		render(<Provider store={store}><App /></Provider>);

		const footer = screen.getByTestId("footer");
		expect(footer).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header and hero section', () => {
    render(<App />);
    expect(screen.getAllByText(/My Landing Page/)).toHaveLength(2);
    expect(screen.getByText(/Welcome to My Projects/)).toBeInTheDocument();
    expect(screen.getByText(/Here you can find a list of my latest projects./)).toBeInTheDocument();
});
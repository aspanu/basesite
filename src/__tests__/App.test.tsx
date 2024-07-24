import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header and hero section', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to My Landing Page/)).toBeInTheDocument();
    expect(screen.getByText(/Here you can find a list of my latest projects and learn more about what I do./)).toBeInTheDocument();
    expect(screen.getByText(/Project One/)).toBeInTheDocument();
    expect(screen.getByText(/Project Two/)).toBeInTheDocument();
    expect(screen.getByText(/Project Three/)).toBeInTheDocument();
});
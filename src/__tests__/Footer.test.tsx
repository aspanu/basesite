import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders header and hero section', () => {
    render(<Footer />);
    expect(screen.getByText(/Crafted with love by/)).toBeInTheDocument();
    expect(screen.getByText(/2024 My Landing Page. All rights reserved/)).toBeInTheDocument();
});
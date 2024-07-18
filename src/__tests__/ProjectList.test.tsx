import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

test('renders project list with projects', () => {
    render(<ProjectList />);
    expect(screen.getByText(/Our Projects/)).toBeInTheDocument();
    expect(screen.getByText(/Project One/)).toBeInTheDocument();
    expect(screen.getByText(/Project Two/)).toBeInTheDocument();
    expect(screen.getByText(/Project Three/)).toBeInTheDocument();
});
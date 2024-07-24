import { render, screen } from '@testing-library/react';
import ProjectSection from '../components/ProjectSection';

test('renders header and hero section', () => {
    render(<ProjectSection
        title="Project Name"
        description="A really good project description"
        image=""
        link="#"
        backgroundClass='light-bg'
    />);
    expect(screen.getByText(/Project Name/)).toBeInTheDocument();
    expect(screen.getByText(/A really good project description/)).toBeInTheDocument();
    expect(screen.getByAltText(/Project Name/)).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import { THeader } from './THeader';

describe('THeader', () => {
  it('renders the title', () => {
    render(<THeader title="My GitHub App" />);
    expect(screen.getByText('My GitHub App')).toBeInTheDocument();
  });
});

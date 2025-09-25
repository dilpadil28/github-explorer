import { render, screen } from '@testing-library/react';
import { ALoading } from './ALoading';

describe('ALoading', () => {
  it('renders with custom text', () => {
    render(<ALoading text="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('does not render text when text is an empty string', () => {
    render(<ALoading text="" />);
    const loadingText = screen.queryByText('Loading...');
    expect(loadingText).not.toBeInTheDocument();
  });
});

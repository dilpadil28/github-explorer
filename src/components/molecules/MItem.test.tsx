import { render, screen } from '@testing-library/react';
import { MItem } from './MItem';
import { Mail } from 'lucide-react';

describe('MItem', () => {
  it('renders as a link when href is provided', () => {
    render(
      <MItem icon={Mail} value={10} label="Emails" href="https://example.com" />
    );
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toContainElement(screen.getByText('10'));
    expect(link).toContainElement(screen.getByText('Emails'));
  });

  it('renders as a div (not a link) when href is not provided', () => {
    render(<MItem icon={Mail} value="99+" label="Inbox" />);
    const link = screen.queryByRole('link');

    expect(link).not.toBeInTheDocument();
    expect(screen.getByText('99+')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
  });
});

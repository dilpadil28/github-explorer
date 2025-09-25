import { render, screen } from '@testing-library/react';
import { MExternalLink } from './MExternalLink';
import { vi } from 'vitest';

vi.mock('@/utils/helpers', () => ({
  ensureHttps: (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return 'https://' + url;
  },
}));

describe('MExternalLink', () => {
  it('renders link with children text', () => {
    render(<MExternalLink href="example.com">Visit Site</MExternalLink>);
    const link = screen.getByRole('link', { name: /visit site/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('has correct target and rel attributes', () => {
    render(<MExternalLink href="https://example.com">External</MExternalLink>);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom className', () => {
    render(
      <MExternalLink href="https://example.com" className="text-red-500">
        Custom Style
      </MExternalLink>
    );
    const link = screen.getByRole('link');

    expect(link).toHaveClass('text-red-500');
  });
});

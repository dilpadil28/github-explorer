import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AAvatar } from './AAvatar';

describe('AAvatar', () => {
  it('renders with given src and alt', () => {
    render(<AAvatar src="/avatar.jpg" alt="User Avatar" />);

    const img = screen.getByAltText('User Avatar') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('/avatar.jpg');
  });

  it('applies default size class (md)', () => {
    render(<AAvatar src="/avatar.jpg" alt="User Avatar" />);

    const img = screen.getByAltText('User Avatar');
    expect(img).toHaveClass('w-12 h-12');
  });

  it('applies correct size class for size="lg"', () => {
    render(<AAvatar src="/avatar.jpg" alt="User Avatar" size="lg" />);

    const img = screen.getByAltText('User Avatar');
    expect(img).toHaveClass('w-16 h-16');
  });

  it('appends custom className', () => {
    render(<AAvatar src="/avatar.jpg" alt="User Avatar" className="border" />);

    const img = screen.getByAltText('User Avatar');
    expect(img).toHaveClass('border');
  });
});

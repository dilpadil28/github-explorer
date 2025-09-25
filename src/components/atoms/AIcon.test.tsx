import { render, screen } from '@testing-library/react';
import { AIcon } from './AIcon';
import { Smile } from 'lucide-react';

describe('AIcon with Lucide React icon', () => {
  it('renders Lucide icon with default className', () => {
    render(<AIcon icon={Smile} aria-label="smile-icon" />);
    const icon = screen.getByLabelText('smile-icon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('h-4 w-4');
  });

  it('renders Lucide icon with custom className', () => {
    render(
      <AIcon
        icon={Smile}
        className="h-8 w-8 text-blue-500"
        aria-label="custom-smile-icon"
      />
    );
    const icon = screen.getByLabelText('custom-smile-icon');

    expect(icon).toHaveClass('h-8 w-8 text-blue-500');
  });
});

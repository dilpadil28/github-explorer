import { render, screen, fireEvent } from '@testing-library/react';
import { MSearchInput } from './MSearchInput';

import { vi } from 'vitest';

describe('MSearchInput', () => {
  const setup = (value = '') => {
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    const onClear = vi.fn();

    render(
      <MSearchInput
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        onClear={onClear}
      />
    );

    const input = screen.getByLabelText('Search...');
    const button = screen.getByRole('button', { name: /search/i });

    return { input, button, onChange, onSubmit, onClear };
  };

  it('renders input and button', () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('disables button when input is empty', () => {
    const { button } = setup('');
    expect(button).toBeDisabled();
  });

  it('enables button when input has value', () => {
    const { button } = setup('test');
    expect(button).not.toBeDisabled();
  });

  it('calls onChange when typing', () => {
    const { input, onChange } = setup();
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalledWith('hello');
  });

  it('calls onSubmit when pressing Enter', () => {
    const { input, onSubmit } = setup('test');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onSubmit).toHaveBeenCalledWith('test');
  });

  it('calls onClear when pressing Escape', () => {
    const { input, onClear } = setup('test');
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
    expect(onClear).toHaveBeenCalled();
  });

  it('calls onSubmit when clicking button', () => {
    const { button, onSubmit } = setup('query');
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledWith('query');
  });
});

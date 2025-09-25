import type React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface MSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export const MSearchInput: React.FC<MSearchInputProps> = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = 'Search...',
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(value);
    } else if (e.key === 'Escape') {
      onClear();
    }
  };

  const handleButtonClick = () => {
    onSubmit(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label="Search..."
      />
      <Button disabled={!value} onClick={handleButtonClick}>
        Search
      </Button>
    </div>
  );
};

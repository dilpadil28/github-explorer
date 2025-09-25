import { Loader2 } from 'lucide-react';

interface ALoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const ALoading: React.FC<ALoadingProps> = ({
  size = 'md',
  text = 'Loading...',
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`animate-spin text-blue-600 ${sizes[size]}`} />
      {text && <span className="ml-2 text-sm text-gray-600">{text}</span>}
    </div>
  );
};

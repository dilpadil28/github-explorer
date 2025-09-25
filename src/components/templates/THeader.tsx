import { Github } from 'lucide-react';
import { AIcon } from '../atoms/AIcon';

interface THeaderProps {
  title: string;
}

export const THeader: React.FC<THeaderProps> = ({ title }) => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AIcon icon={Github} className="h-8 w-8 text-gray-900 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>
    </div>
  </header>
);

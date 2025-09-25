import type React from 'react';

interface MItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number | string;
  label: string;
  href?: string;
}

export const MItem: React.FC<MItemProps> = ({
  icon: IconComponent,
  value,
  label,
  href,
}) => {
  const content = (
    <div className="flex items-center">
      <IconComponent className="h-4 w-4 mr-1 text-gray-400" />
      <span className="font-semibold">{value}</span>
      <span className="text-gray-500 ml-1">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors"
      >
        {content}
      </a>
    );
  }

  return content;
};

import type React from 'react';

interface AIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  'aria-label'?: string;
}

export const AIcon: React.FC<AIconProps> = ({
  icon: IconComponent,
  className = 'h-4 w-4',
  ...props
}) => <IconComponent className={className} {...props} />;

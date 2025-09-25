import { ensureHttps } from '@/utils/helpers';
import { ExternalLinkIcon } from 'lucide-react';
import type React from 'react';

interface MExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const MExternalLink: React.FC<MExternalLinkProps> = ({
  href,
  children,
  className = '',
  showIcon = true,
}) => (
  <a
    href={ensureHttps(href)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center hover:text-blue-600 transition-colors ${className}`}
  >
    {children}
    {showIcon && <ExternalLinkIcon className="h-3 w-3 ml-1" />}
  </a>
);

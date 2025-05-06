'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Ticket, Award, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  ticket: Ticket,
  award: Award,
};

type BottomNavLinkProps = {
  href: string;
  label: string;
  icon: string;
  className?: string;
};

function BottomNavLink({ href, label, icon, className }: BottomNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className={cn(
        'flex flex-1 h-full flex-col items-center justify-center py-4',
        isActive && 'active',
        className,
      )}
      style={{ minHeight: '70px' }}
    >
      <div className="flex flex-col items-center">
        <Icon
          className="h-7 w-7" // Ícones maiores
          fill={isActive ? 'currentColor' : 'none'}
          strokeWidth={isActive ? 1.5 : 2}
        />
        <span className="text-sm font-medium mt-2">{label}</span>
      </div>
    </Link>
  );
}

export { BottomNavLink };

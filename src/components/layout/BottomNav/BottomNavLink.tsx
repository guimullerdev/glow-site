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
        'bottom-nav-link flex flex-1 h-full flex-col items-center justify-center',
        isActive && 'active',
        className,
      )}
    >
      <Icon
        className="h-6 w-6"
        fill={isActive ? 'currentColor' : 'none'}
        strokeWidth={isActive ? 1.5 : 2}
      />
      <span className="text-xs mt-1.5">{label}</span>
    </Link>
  );
}

export { BottomNavLink };

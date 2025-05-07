import { BottomNavLink } from './BottomNavLink';

const routes = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/coupons', label: 'Cupons', icon: 'ticket' },
  { href: '/fidelidade', label: 'Fidelidade', icon: 'award' },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-around bg-white border-t h-16 pb-safe">
      {routes.map((route) => (
        <BottomNavLink
          key={route.href}
          href={route.href}
          label={route.label}
          icon={route.icon}
        />
      ))}
    </nav>
  );
}

export { BottomNav };

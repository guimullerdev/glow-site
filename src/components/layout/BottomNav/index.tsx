import { BottomNavLink } from './BottomNavLink';

const routes = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/coupons', label: 'Cupons', icon: 'ticket' },
  { href: '/fidelidade', label: 'Fidelidade', icon: 'award' },
];

function BottomNav() {
  return (
    <nav className="bottom-nav fixed bottom-0 inset-x-0 z-50 h-16 flex items-center">
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

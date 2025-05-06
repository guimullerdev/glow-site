import { BottomNavLink } from './BottomNavLink';

const routes = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/coupons', label: 'Cupons', icon: 'ticket' },
  { href: '/fidelidade', label: 'Fidelidade', icon: 'award' },
];

function BottomNav() {
  return (
    <div className="bottom-nav-container h-[calc(80px+env(safe-area-inset-bottom))]">
      <nav className="bottom-nav fixed bottom-0 inset-x-0 z-50 h-[80px] flex items-center justify-around bg-white border-t">
        {routes.map((route) => (
          <BottomNavLink
            key={route.href}
            href={route.href}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </nav>
    </div>
  );
}

export { BottomNav };

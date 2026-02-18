import type { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import { History, House, PlusCircle, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  to: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: '/', label: 'Home', icon: House, end: true },
  { to: '/log-meal', label: 'Log Meal', icon: PlusCircle },
  { to: '/history', label: 'History', icon: History },
  { to: '/profile', label: 'Profile', icon: UserRound }
];

export function MobileBottomNav() {
  return (
    <nav aria-label="Mobile navigation" className="supports-backdrop-filter:bg-background/80 border-border fixed inset-x-0 bottom-0 z-50 border-t backdrop-blur">
      <ul className="mx-auto grid max-w-md grid-cols-4 gap-1 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.5rem)]">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'relative flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-[11px] font-medium',
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn('size-5', isActive ? 'text-primary' : 'text-current')} aria-hidden="true" />
                  <span>{label}</span>
                  <span className={cn('absolute right-3 bottom-0 left-3 h-0.5', isActive ? 'bg-primary opacity-100' : 'opacity-0')} aria-hidden="true" />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

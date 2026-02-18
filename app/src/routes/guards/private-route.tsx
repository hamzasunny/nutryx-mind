import type { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { isAuthenticated } from '@/lib/auth';

type PrivateRouteProps = {
  children?: ReactNode;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <div className="min-h-svh pb-20">
      {children ?? <Outlet />}
      <MobileBottomNav />
    </div>
  );
}

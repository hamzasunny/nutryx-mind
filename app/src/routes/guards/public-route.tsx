import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '@/lib/auth';

type PublicRouteProps = {
  children?: ReactNode;
};

export function PublicRoute({ children }: PublicRouteProps) {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children ?? <Outlet />;
}

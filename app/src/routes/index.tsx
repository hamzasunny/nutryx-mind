import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/app-routes';

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

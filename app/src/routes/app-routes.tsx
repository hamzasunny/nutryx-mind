import { Route, Routes } from 'react-router-dom';

import HistoryPage from '@/pages/history-page';
import HomePage from '@/pages/home-page';
import LoginPage from '@/pages/login-page';
import LogMealPage from '@/pages/log-meal-page';
import NotFoundPage from '@/pages/not-found-page';
import ProfilePage from '@/pages/profile-page';
import { PrivateRoute } from '@/routes/guards/private-route';
import { PublicRoute } from '@/routes/guards/public-route';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-meal" element={<LogMealPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

import { useNavigate } from 'react-router-dom';

import { PageTopHeader } from '@/components/layout/page-top-header';
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth';

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-svh px-6 pt-6 pb-24">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <PageTopHeader title="Profile" />

        <p className="text-muted-foreground text-sm">Manage your account settings.</p>

        <div className="bg-card rounded-lg border p-4">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </main>
    </div>
  );
}

import { Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth';

export default function Page2() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Apple className="size-4" />
          </div>
          Nutryx Mind
        </div>
        <div className="bg-card rounded-lg border p-6">
          <p className="text-sm">This is a private page.</p>
          <Button className="mt-4" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

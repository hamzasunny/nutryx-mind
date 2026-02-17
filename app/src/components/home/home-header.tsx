import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HomeHeaderProps = { today: Date };

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

export function HomeHeader({ today }: HomeHeaderProps) {
  return (
    <header className="bg-tertiary flex items-start justify-between gap-4 rounded-2xl border p-4 shadow-sm sm:p-6">
      <div>
        <h1 className="text-tertiary-foreground text-2xl font-semibold tracking-tight sm:text-3xl">Daily Dashboard</h1>
        <p className="mt-1 text-sm sm:text-base">{dateFormatter.format(today)}</p>
      </div>
      <div className="relative p-2">
        <Button variant="secondary" size="icon" aria-label="Open notifications" className="bg-background">
          <Bell className="text-chart-1 size-4" aria-hidden="true" />
        </Button>
        <span className="bg-chart-2 text-primary-foreground absolute -top-0.5 -right-0.5 inline-flex min-h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold">3</span>
      </div>
    </header>
  );
}

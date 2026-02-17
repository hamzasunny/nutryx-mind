import { Flame, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

type CaloriesOverviewCardProps = {
  consumed: number;
  goal: number;
};

export function CaloriesOverviewCard({ consumed, goal }: CaloriesOverviewCardProps) {
  const consumedForChart = Math.min(consumed, goal);
  const remaining = Math.max(goal - consumed, 0);

  const data = [
    { name: 'Consumed', value: consumedForChart, fill: 'var(--color-chart-1)' },
    { name: 'Remaining', value: remaining, fill: 'var(--color-muted)' }
  ];

  return (
    <Card className="bg-card shadow-sm">
      <CardContent>
        <div className="relative mx-auto h-56 w-full max-w-xs">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart accessibilityLayer={false}>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={68} outerRadius={96} paddingAngle={2} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-bold sm:text-3xl">{remaining}</span>
            <span className="text-muted-foreground text-sm">kcal left</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-muted/70 rounded-lg p-3">
            <p className="text-muted-foreground inline-flex items-center gap-1.5">
              <Flame className="text-chart-1 size-4" aria-hidden="true" />
              Consumed
            </p>
            <p className="mt-1 font-semibold">{consumed} kcal</p>
          </div>
          <div className="bg-muted/70 rounded-lg p-3">
            <p className="text-muted-foreground inline-flex items-center gap-1.5">
              <Target className="text-chart-2 size-4" aria-hidden="true" />
              Goal
            </p>
            <p className="mt-1 font-semibold">{goal} kcal</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { WeeklyCalories } from '@/components/home/home-mock-data';

type WeeklyCaloriesCardProps = {
  data: WeeklyCalories[];
};

export function WeeklyCaloriesCard({ data }: WeeklyCaloriesCardProps) {
  return (
    <Card className="bg-card shadow-sm">
      <CardHeader>
        <CardTitle>Weekly Calories</CardTitle>
        <CardDescription>Total consumed calories in the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72 w-full" role="img" aria-label="Bar chart of calories consumed from Monday to Sunday">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 2, left: -15, bottom: 4 }} accessibilityLayer={false}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'var(--color-muted)' }} />
              <Bar dataKey="calories" name="Calories" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-muted/60 mt-3 inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs">
          <span className="bg-chart-1 inline-block size-2 rounded-full" />
          <span className="text-muted-foreground">Calories</span>
        </div>
      </CardContent>
    </Card>
  );
}

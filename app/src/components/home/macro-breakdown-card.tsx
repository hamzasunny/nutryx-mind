import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { MacroItem } from '@/components/home/home-mock-data';

type MacroBreakdownCardProps = {
  macros: MacroItem[];
};

export function MacroBreakdownCard({ macros }: MacroBreakdownCardProps) {
  return (
    <Card className="bg-card shadow-sm">
      <CardHeader>
        <CardTitle>Macro Breakdown</CardTitle>
        <CardDescription>Today's macronutrients</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {macros.map((macro) => {
            const safeGoal = macro.goal > 0 ? macro.goal : 1;
            const progress = Math.round((macro.grams / safeGoal) * 100);
            const safeProgress = Math.min(progress, 100);

            return (
              <li key={macro.name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <p className="font-medium">{macro.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {macro.grams}g / {macro.goal}g
                  </p>
                </div>
                <div
                  className="bg-background h-2.5 w-full overflow-hidden rounded-full"
                  role="progressbar"
                  aria-label={`${macro.name} progress`}
                  aria-valuemin={0}
                  aria-valuemax={macro.goal}
                  aria-valuenow={macro.grams}
                >
                  <div className="h-full rounded-full transition-all" style={{ width: `${safeProgress}%`, backgroundColor: macro.color }} />
                </div>
                <p className="text-muted-foreground mt-2 text-xs font-medium">{progress}% complete</p>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

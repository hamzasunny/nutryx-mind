import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { FoodEntry } from '@/components/home/home-mock-data';

type TodaysEntriesCardProps = {
  entries: FoodEntry[];
};

const typeStyles: Record<FoodEntry['type'], { rowAccent: string; pill: string }> = {
  Breakfast: {
    rowAccent: 'border-l-chart-2',
    pill: 'border-chart-2/35 bg-chart-2/15 text-chart-2'
  },
  Lunch: {
    rowAccent: 'border-l-chart-1',
    pill: 'border-chart-1/35 bg-chart-1/15 text-chart-1'
  },
  Dinner: {
    rowAccent: 'border-l-chart-3',
    pill: 'border-chart-3/35 bg-chart-3/15 text-chart-3'
  },
  Snack: {
    rowAccent: 'border-l-chart-4',
    pill: 'border-chart-4/35 bg-chart-4/15 text-chart-4'
  }
};

type EntryRowProps = {
  entry: FoodEntry;
  index: number;
};

function EntryRow({ entry, index }: EntryRowProps) {
  const { rowAccent, pill } = typeStyles[entry.type];

  return (
    <li className={`bg-background/80 flex items-center justify-between gap-3 rounded-lg border border-l-4 p-3 ${rowAccent}`}>
      <div className="flex min-w-0 items-center gap-3">
        <span className="text-muted-foreground bg-muted inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">{index + 1}</span>
        <div className="min-w-0">
          <p className="truncate font-medium">{entry.name}</p>
          <span className={`mt-1 inline-flex rounded-md border px-2 py-0.5 text-[11px] font-semibold ${pill}`}>{entry.type}</span>
        </div>
      </div>
      <span className="bg-primary/10 text-primary rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap">{entry.calories} kcal</span>
    </li>
  );
}

export function TodaysEntriesCard({ entries }: TodaysEntriesCardProps) {
  return (
    <Card className="bg-card shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.12em] uppercase">Food Log</p>
            <CardTitle className="mt-1 text-xl">Today&apos;s Entries</CardTitle>
          </div>
          <Button size="sm">View All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <ul className="space-y-3">
          {entries.map((entry, index) => (
            <EntryRow key={entry.id} entry={entry} index={index} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

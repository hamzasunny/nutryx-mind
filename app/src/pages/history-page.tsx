import { useMemo, useState } from 'react';
import { CalendarDays, Flame } from 'lucide-react';

import { DateRangeDialog } from '@/components/history/date-range-dialog';
import { DeleteEntryDialog } from '@/components/history/delete-entry-dialog';
import { EditEntryDialog } from '@/components/history/edit-entry-dialog';
import { MealEntryItem } from '@/components/history/meal-entry-item';
import type { EditDraft, HistoryEntry } from '@/components/history/history-types';
import { PageTopHeader } from '@/components/layout/page-top-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DAY = 24 * 60 * 60 * 1000;

const historyMockEntries: HistoryEntry[] = [
  { id: 'h-1', date: '2026-02-17', name: 'Avocado Toast & Eggs', type: 'Breakfast', calories: 430, macros: { protein: 22, carbs: 34, fats: 24 } },
  { id: 'h-2', date: '2026-02-17', name: 'Chicken Burrito Bowl', type: 'Lunch', calories: 640, macros: { protein: 48, carbs: 62, fats: 21 } },
  { id: 'h-3', date: '2026-02-17', name: 'Berry Protein Smoothie', type: 'Snack', calories: 280, macros: { protein: 24, carbs: 29, fats: 7 } },
  { id: 'h-4', date: '2026-02-16', name: 'Greek Yogurt Parfait', type: 'Breakfast', calories: 340, macros: { protein: 23, carbs: 35, fats: 9 } },
  { id: 'h-5', date: '2026-02-16', name: 'Salmon Quinoa Plate', type: 'Dinner', calories: 590, macros: { protein: 42, carbs: 47, fats: 24 } },
  { id: 'h-6', date: '2026-02-15', name: 'Turkey Wrap', type: 'Lunch', calories: 470, macros: { protein: 36, carbs: 39, fats: 16 } },
  { id: 'h-7', date: '2026-02-15', name: 'Dark Chocolate Almonds', type: 'Snack', calories: 190, macros: { protein: 6, carbs: 12, fats: 13 } },
  { id: 'h-8', date: '2026-02-13', name: 'Overnight Oats', type: 'Breakfast', calories: 360, macros: { protein: 16, carbs: 48, fats: 11 } },
  { id: 'h-9', date: '2026-02-11', name: 'Steak & Veggies', type: 'Dinner', calories: 650, macros: { protein: 54, carbs: 26, fats: 34 } }
];

function toInputDate(date: Date): string {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDateLabel(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
}

function formatShortDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function toEditDraft(entry: HistoryEntry): EditDraft {
  return {
    name: entry.name,
    type: entry.type,
    calories: String(entry.calories),
    protein: String(entry.macros.protein),
    carbs: String(entry.macros.carbs),
    fats: String(entry.macros.fats)
  };
}

export default function HistoryPage() {
  const defaultEnd = new Date();
  const defaultStart = new Date(defaultEnd.getTime() - 14 * DAY);

  const [entries, setEntries] = useState(historyMockEntries);
  const [startDate, setStartDate] = useState(toInputDate(defaultStart));
  const [endDate, setEndDate] = useState(toInputDate(defaultEnd));
  const [isRangeDialogOpen, setIsRangeDialogOpen] = useState(false);
  const [rangeDraftStart, setRangeDraftStart] = useState(toInputDate(defaultStart));
  const [rangeDraftEnd, setRangeDraftEnd] = useState(toInputDate(defaultEnd));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<EditDraft | null>(null);
  const [deletingEntry, setDeletingEntry] = useState<HistoryEntry | null>(null);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => (!startDate || entry.date >= startDate) && (!endDate || entry.date <= endDate)).sort((a, b) => b.date.localeCompare(a.date));
  }, [entries, startDate, endDate]);

  const groupedEntries = useMemo(() => {
    const grouped = new Map<string, HistoryEntry[]>();
    for (const entry of filteredEntries) {
      const dateEntries = grouped.get(entry.date) ?? [];
      dateEntries.push(entry);
      grouped.set(entry.date, dateEntries);
    }
    return grouped;
  }, [filteredEntries]);

  const totalInRange = useMemo(() => filteredEntries.reduce((sum, entry) => sum + entry.calories, 0), [filteredEntries]);
  const invalidRange = Boolean(startDate && endDate && startDate > endDate);
  const invalidDraftRange = Boolean(rangeDraftStart && rangeDraftEnd && rangeDraftStart > rangeDraftEnd);
  const rangeLabel = startDate && endDate ? `${formatShortDate(startDate)} - ${formatShortDate(endDate)}` : 'Select date range';

  const openRangeDialog = () => {
    setRangeDraftStart(startDate);
    setRangeDraftEnd(endDate);
    setIsRangeDialogOpen(true);
  };

  const applyRangeDraft = () => {
    if (invalidDraftRange) return;
    setStartDate(rangeDraftStart);
    setEndDate(rangeDraftEnd);
    setIsRangeDialogOpen(false);
  };

  const handleEditOpen = (entry: HistoryEntry) => {
    setEditingId(entry.id);
    setEditDraft(toEditDraft(entry));
  };

  const handleEditSave = () => {
    if (!editingId || !editDraft) return;

    const nextCalories = Number(editDraft.calories);
    const nextProtein = Number(editDraft.protein);
    const nextCarbs = Number(editDraft.carbs);
    const nextFats = Number(editDraft.fats);

    if ([nextCalories, nextProtein, nextCarbs, nextFats].some((value) => Number.isNaN(value) || value < 0)) return;

    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === editingId
          ? {
              ...entry,
              name: editDraft.name.trim() || entry.name,
              type: editDraft.type,
              calories: Math.round(nextCalories),
              macros: {
                protein: Math.round(nextProtein),
                carbs: Math.round(nextCarbs),
                fats: Math.round(nextFats)
              }
            }
          : entry
      )
    );

    setEditingId(null);
    setEditDraft(null);
  };

  const handleDeleteConfirm = () => {
    if (!deletingEntry) return;
    setEntries((prev) => prev.filter((entry) => entry.id !== deletingEntry.id));
    setDeletingEntry(null);
  };

  return (
    <div className="min-h-svh px-4 pt-6 pb-24 sm:px-6">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <PageTopHeader title="History" />
        <Card className="bg-card gap-4 shadow-sm">
          <CardHeader className="gap-0">
            <CardTitle className="text-lg tracking-tight">Meal History</CardTitle>
            <CardDescription>
              <div className="text-primary/80 inline-flex items-center gap-2 text-sm">
                <CalendarDays className="size-3.5" />
                Filter entries by date range.
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-between" onClick={openRangeDialog}>
              <span className="truncate text-left">{rangeLabel}</span>
              <CalendarDays className="size-4" />
            </Button>

            <div className="bg-muted/45 flex items-center justify-between rounded-lg border px-3 py-2.5">
              <p className="text-muted-foreground text-xs">Calories in range</p>
              <p className="text-primary inline-flex items-center gap-1 text-xs font-semibold">
                <Flame className="size-4" />
                {totalInRange} kcal
              </p>
            </div>

            {invalidRange ? <p className="text-destructive text-sm">Start date cannot be after end date.</p> : null}
          </CardContent>
        </Card>

        {invalidRange ? null : groupedEntries.size === 0 ? (
          <Card className="bg-card/90 border-dashed">
            <CardContent className="py-12 text-center">
              <p className="text-lg font-semibold">No entries found</p>
              <p className="text-muted-foreground mt-1 text-sm">Try widening your date range to see more history.</p>
            </CardContent>
          </Card>
        ) : (
          <section className="space-y-3">
            {Array.from(groupedEntries.entries()).map(([date, dateEntries]) => {
              const dateCalories = dateEntries.reduce((sum, entry) => sum + entry.calories, 0);

              return (
                <div key={date} className="space-y-2">
                  <div className="px-2 pt-2 backdrop-blur">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{formatDateLabel(date)}</p>
                      <p className="text-muted-foreground text-xs">{dateCalories} kcal</p>
                    </div>
                  </div>

                  <ul className="bg-card/90 overflow-hidden rounded-lg border shadow-sm">
                    {dateEntries.map((entry) => (
                      <MealEntryItem key={entry.id} entry={entry} onEdit={handleEditOpen} onDelete={setDeletingEntry} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        )}
      </main>

      <DateRangeDialog
        open={isRangeDialogOpen}
        onOpenChange={setIsRangeDialogOpen}
        rangeDraftStart={rangeDraftStart}
        rangeDraftEnd={rangeDraftEnd}
        invalidDraftRange={invalidDraftRange}
        onRangeDraftStartChange={setRangeDraftStart}
        onRangeDraftEndChange={setRangeDraftEnd}
        onApply={applyRangeDraft}
      />

      <EditEntryDialog
        open={Boolean(editingId && editDraft)}
        editDraft={editDraft}
        onOpenChange={(open) => {
          if (!open) {
            setEditingId(null);
            setEditDraft(null);
          }
        }}
        onEditDraftChange={setEditDraft}
        onSave={handleEditSave}
        onCancel={() => setEditingId(null)}
      />

      <DeleteEntryDialog deletingEntry={deletingEntry} onOpenChange={(open) => (!open ? setDeletingEntry(null) : null)} onConfirm={handleDeleteConfirm} />
    </div>
  );
}

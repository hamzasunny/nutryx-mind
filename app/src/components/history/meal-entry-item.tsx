import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PencilLine, Trash2 } from 'lucide-react';
import type { HistoryEntry } from '@/components/history/history-types';

type MealEntryItemProps = {
  entry: HistoryEntry;
  onEdit: (entry: HistoryEntry) => void;
  onDelete: (entry: HistoryEntry) => void;
};

export function MealEntryItem({ entry, onEdit, onDelete }: MealEntryItemProps) {
  return (
    <li className="hover:bg-muted/30 flex items-center gap-2 border-b px-3 py-2.5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <p className="truncate text-sm font-medium">{entry.name}</p>
          <Badge variant="outline" className="border-chart-1/35 bg-chart-1/15 text-chart-1">
            {entry.type}
          </Badge>
        </div>
        <p className="text-muted-foreground truncate text-xs">
          {entry.calories} kcal | P {entry.macros.protein}g | C {entry.macros.carbs}g | F {entry.macros.fats}g
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${entry.name}`}>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem onClick={() => onEdit(entry)}>
            <PencilLine className="size-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={() => onDelete(entry)}>
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

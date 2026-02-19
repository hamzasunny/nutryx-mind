import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { EditDraft, MealType } from '@/components/history/history-types';

type EditEntryDialogProps = {
  open: boolean;
  editDraft: EditDraft | null;
  onOpenChange: (open: boolean) => void;
  onEditDraftChange: (nextDraft: EditDraft) => void;
  onSave: () => void;
  onCancel: () => void;
};

export function EditEntryDialog({ open, editDraft, onOpenChange, onEditDraftChange, onSave, onCancel }: EditEntryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Entry</DialogTitle>
          <DialogDescription>Update meal name, type, calories, and macros.</DialogDescription>
        </DialogHeader>

        {editDraft ? (
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-meal-name">Meal name</Label>
              <Input id="edit-meal-name" value={editDraft.name} onChange={(event) => onEditDraftChange({ ...editDraft, name: event.target.value })} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-meal-type">Meal type</Label>
              <select
                id="edit-meal-type"
                value={editDraft.type}
                onChange={(event) => onEditDraftChange({ ...editDraft, type: event.target.value as MealType })}
                className="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border px-3 text-sm shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-none"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="edit-calories">Calories (kcal)</Label>
                <Input id="edit-calories" type="number" min={0} value={editDraft.calories} onChange={(event) => onEditDraftChange({ ...editDraft, calories: event.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-protein">Protein (g)</Label>
                <Input id="edit-protein" type="number" min={0} value={editDraft.protein} onChange={(event) => onEditDraftChange({ ...editDraft, protein: event.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-carbs">Carbs (g)</Label>
                <Input id="edit-carbs" type="number" min={0} value={editDraft.carbs} onChange={(event) => onEditDraftChange({ ...editDraft, carbs: event.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-fats">Fats (g)</Label>
                <Input id="edit-fats" type="number" min={0} value={editDraft.fats} onChange={(event) => onEditDraftChange({ ...editDraft, fats: event.target.value })} />
              </div>
            </div>
          </div>
        ) : null}

        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

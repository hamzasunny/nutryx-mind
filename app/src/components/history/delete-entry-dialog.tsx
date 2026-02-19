import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import type { HistoryEntry } from '@/components/history/history-types';

type DeleteEntryDialogProps = {
  deletingEntry: HistoryEntry | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function DeleteEntryDialog({ deletingEntry, onOpenChange, onConfirm }: DeleteEntryDialogProps) {
  return (
    <AlertDialog open={Boolean(deletingEntry)} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this entry?</AlertDialogTitle>
          <AlertDialogDescription>{deletingEntry ? `This will permanently remove "${deletingEntry.name}" from your history.` : 'This action cannot be undone.'}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive hover:bg-destructive/90 text-white" onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

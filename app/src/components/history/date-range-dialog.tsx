import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type DateRangeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rangeDraftStart: string;
  rangeDraftEnd: string;
  invalidDraftRange: boolean;
  onRangeDraftStartChange: (value: string) => void;
  onRangeDraftEndChange: (value: string) => void;
  onApply: () => void;
};

export function DateRangeDialog({ open, onOpenChange, rangeDraftStart, rangeDraftEnd, invalidDraftRange, onRangeDraftStartChange, onRangeDraftEndChange, onApply }: DateRangeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Date Range</DialogTitle>
          <DialogDescription>Pick start and end date in one place.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="range-start-date">Start date</Label>
            <Input id="range-start-date" type="date" value={rangeDraftStart} onChange={(event) => onRangeDraftStartChange(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="range-end-date">End date</Label>
            <Input id="range-end-date" type="date" value={rangeDraftEnd} onChange={(event) => onRangeDraftEndChange(event.target.value)} />
          </div>
        </div>
        {invalidDraftRange ? <p className="text-destructive text-sm">Start date cannot be after end date.</p> : null}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onApply} disabled={invalidDraftRange}>
            Apply Range
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

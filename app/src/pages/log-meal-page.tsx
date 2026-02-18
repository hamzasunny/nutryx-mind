import { PageTopHeader } from '@/components/layout/page-top-header';

export default function LogMealPage() {
  return (
    <div className="min-h-svh px-6 pt-6 pb-24">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <PageTopHeader title="Log Meal" />
        <p className="text-muted-foreground text-sm">Add your meal details here.</p>
      </main>
    </div>
  );
}

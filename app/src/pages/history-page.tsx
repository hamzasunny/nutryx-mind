import { PageTopHeader } from '@/components/layout/page-top-header';

export default function HistoryPage() {
  return (
    <div className="min-h-svh px-6 pt-6 pb-24">
      <main className="mx-auto w-full max-w-3xl">
        <PageTopHeader title="History" />
        <p className="text-muted-foreground mt-3 text-sm">Your previous meal and nutrition logs will appear here.</p>
      </main>
    </div>
  );
}

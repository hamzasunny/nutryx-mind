import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type PageTopHeaderProps = {
  title: string;
  backTo?: string;
};

export function PageTopHeader({ title, backTo = '/' }: PageTopHeaderProps) {
  return (
    <header className="relative flex items-center py-1">
      <Link to={backTo} aria-label="Go back" className="text-primary inline-flex size-9 items-center justify-center rounded-md transition-colors">
        <ChevronLeft className="size-6" aria-hidden="true" />
      </Link>

      <h1 className="text-primary pointer-events-none absolute inset-x-0 text-center text-xl font-semibold tracking-tight">{title}</h1>
    </header>
  );
}

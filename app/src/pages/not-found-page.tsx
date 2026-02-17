import { Link } from 'react-router-dom';
import notFoundImage from '@/assets/404.png';

export default function NotFoundPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-2 p-6 text-center md:p-10">
      <img src={notFoundImage} alt="Image showing a 404 error" className="w-full max-w-md" loading="lazy" />
      <h3 className="mt-4 text-xl font-semibold">Page Not Found</h3>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
        Go to Home
      </Link>
    </div>
  );
}

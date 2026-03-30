import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
    <h2 className="text-xl font-serif font-semibold mb-2">Page Not Found</h2>
    <p className="text-muted-foreground mb-6 max-w-md">
      Sorry, the page you're looking for doesn't exist. It may have been moved or removed.
    </p>
    <Button asChild size="lg">
      <Link to="/"><Home className="w-4 h-4 mr-2" /> Go Back Home</Link>
    </Button>
  </div>
);

export default NotFound;

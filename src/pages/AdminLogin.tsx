import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdmin } from '@/hooks/useAdmin';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { signIn, isAdmin, loading } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!loading && isAdmin) {
    navigate('/admin', { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await signIn(email, password);
    if (error) {
      toast({ title: 'Login failed', description: error.message, variant: 'destructive' });
    } else {
      // useAdmin will re-check role, then redirect
      setTimeout(() => navigate('/admin', { replace: true }), 500);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-card border rounded-xl p-8 space-y-5">
        <div className="text-center">
          <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="text-xl font-serif font-bold">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Dr. Patwa Clinic Dashboard</p>
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Password</label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={submitting || loading}>
          {submitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;

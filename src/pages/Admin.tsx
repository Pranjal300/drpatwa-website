import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/hooks/useAdmin';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, FileText, Image, LogOut, Plus, Trash2, Save, Eye, EyeOff } from 'lucide-react';

type Setting = { key: string; value: string };
type BlogPost = { id: string; title: string; slug: string; excerpt: string | null; content: string; image_url: string | null; published: boolean; created_at: string };
type GalleryImage = { id: string; image_url: string; alt_text: string | null; category: string; sort_order: number };

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [settings, setSettings] = useState<Setting[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [saving, setSaving] = useState(false);

  // Blog form
  const [blogForm, setBlogForm] = useState({ title: '', slug: '', excerpt: '', content: '', image_url: '', published: false });
  const [editingBlog, setEditingBlog] = useState<string | null>(null);

  // Gallery form
  const [galleryForm, setGalleryForm] = useState({ image_url: '', alt_text: '', category: 'results' });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin/login', { replace: true });
    }
  }, [loading, user, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin]);

  const loadData = async () => {
    const [settingsRes, blogsRes, galleryRes] = await Promise.all([
      supabase.from('site_settings').select('key, value'),
      supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
      supabase.from('gallery_images').select('*').order('sort_order'),
    ]);
    if (settingsRes.data) setSettings(settingsRes.data);
    if (blogsRes.data) setBlogs(blogsRes.data as BlogPost[]);
    if (galleryRes.data) setGallery(galleryRes.data as GalleryImage[]);
  };

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s));
  };

  const saveSettings = async () => {
    setSaving(true);
    for (const s of settings) {
      await supabase.from('site_settings').update({ value: s.value }).eq('key', s.key);
    }
    queryClient.invalidateQueries({ queryKey: ['site-settings'] });
    toast({ title: 'Settings saved!' });
    setSaving(false);
  };

  const saveBlog = async () => {
    setSaving(true);
    if (editingBlog) {
      await supabase.from('blog_posts').update({
        title: blogForm.title, slug: blogForm.slug, excerpt: blogForm.excerpt || null,
        content: blogForm.content, image_url: blogForm.image_url || null, published: blogForm.published,
      }).eq('id', editingBlog);
    } else {
      await supabase.from('blog_posts').insert({
        title: blogForm.title, slug: blogForm.slug, excerpt: blogForm.excerpt || null,
        content: blogForm.content, image_url: blogForm.image_url || null, published: blogForm.published,
      });
    }
    setBlogForm({ title: '', slug: '', excerpt: '', content: '', image_url: '', published: false });
    setEditingBlog(null);
    await loadData();
    toast({ title: editingBlog ? 'Blog updated!' : 'Blog created!' });
    setSaving(false);
  };

  const deleteBlog = async (id: string) => {
    await supabase.from('blog_posts').delete().eq('id', id);
    await loadData();
    toast({ title: 'Blog deleted' });
  };

  const uploadImage = async (file: File) => {
    const ext = file.name.split('.').pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('site-assets').upload(path, file);
    if (error) { toast({ title: 'Upload failed', variant: 'destructive' }); return null; }
    const { data } = supabase.storage.from('site-assets').getPublicUrl(path);
    return data.publicUrl;
  };

  const addGalleryImage = async () => {
    if (!galleryForm.image_url) return;
    setSaving(true);
    await supabase.from('gallery_images').insert({
      image_url: galleryForm.image_url,
      alt_text: galleryForm.alt_text || null,
      category: galleryForm.category,
      sort_order: gallery.length,
    });
    setGalleryForm({ image_url: '', alt_text: '', category: 'results' });
    await loadData();
    toast({ title: 'Image added to gallery!' });
    setSaving(false);
  };

  const deleteGalleryImage = async (id: string) => {
    await supabase.from('gallery_images').delete().eq('id', id);
    await loadData();
    toast({ title: 'Image removed' });
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) setGalleryForm(f => ({ ...f, image_url: url }));
  };

  const handleBlogImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) setBlogForm(f => ({ ...f, image_url: url }));
  };

  const settingLabel: Record<string, string> = {
    animation_mode: '🎬 Animation Mode',
    phone_1: '📞 Phone 1',
    phone_2: '📞 Phone 2',
    email: '✉️ Email',
    morning_timing: '🌅 Morning Timing',
    evening_timing: '🌆 Evening Timing',
    sunday_timing: '📅 Sunday',
    google_rating: '⭐ Google Rating (auto-synced)',
    google_review_count: '📊 Review Count (auto-synced)',
    address: '📍 Address',
  };

  const readOnlyKeys = ['google_rating', 'google_review_count'];

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-serif font-bold text-lg">Dr. Patwa — Admin Panel</h1>
          <Button variant="ghost" size="sm" onClick={() => { signOut(); navigate('/'); }}>
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="settings">
          <TabsList className="mb-6">
            <TabsTrigger value="settings"><Settings className="w-4 h-4 mr-1" /> Settings</TabsTrigger>
            <TabsTrigger value="blog"><FileText className="w-4 h-4 mr-1" /> Blog</TabsTrigger>
            <TabsTrigger value="gallery"><Image className="w-4 h-4 mr-1" /> Gallery</TabsTrigger>
          </TabsList>

          {/* SETTINGS TAB */}
          <TabsContent value="settings">
            <div className="bg-card border rounded-xl p-6 space-y-4">
              <h2 className="font-serif font-bold text-xl mb-4">Site Settings</h2>
              {settings.map(s => (
                <div key={s.key}>
                  <label className="text-sm font-medium mb-1 block">{settingLabel[s.key] || s.key}</label>
                  {s.key === 'animation_mode' ? (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">Light</span>
                      <Switch
                        checked={s.value === 'rich'}
                        onCheckedChange={checked => updateSetting(s.key, checked ? 'rich' : 'light')}
                      />
                      <span className="text-sm text-muted-foreground">Rich (may lag on old phones)</span>
                    </div>
                  ) : s.key === 'address' ? (
                    <Textarea value={s.value} onChange={e => updateSetting(s.key, e.target.value)} rows={2} />
                  ) : (
                    <Input value={s.value} onChange={e => updateSetting(s.key, e.target.value)} />
                  )}
                </div>
              ))}
              <Button onClick={saveSettings} disabled={saving}>
                <Save className="w-4 h-4 mr-1" /> {saving ? 'Saving...' : 'Save All Settings'}
              </Button>
            </div>
          </TabsContent>

          {/* BLOG TAB */}
          <TabsContent value="blog">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6 space-y-4">
                <h2 className="font-serif font-bold text-xl">{editingBlog ? 'Edit Blog Post' : 'New Blog Post'}</h2>
                <div>
                  <label className="text-sm font-medium mb-1 block">Title</label>
                  <Input value={blogForm.title} onChange={e => {
                    const title = e.target.value;
                    setBlogForm(f => ({ ...f, title, slug: editingBlog ? f.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }));
                  }} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Slug</label>
                  <Input value={blogForm.slug} onChange={e => setBlogForm(f => ({ ...f, slug: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Excerpt</label>
                  <Textarea value={blogForm.excerpt} onChange={e => setBlogForm(f => ({ ...f, excerpt: e.target.value }))} rows={2} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Content</label>
                  <Textarea value={blogForm.content} onChange={e => setBlogForm(f => ({ ...f, content: e.target.value }))} rows={8} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Cover Image</label>
                  <input type="file" accept="image/*" onChange={handleBlogImageUpload} className="text-sm" />
                  {blogForm.image_url && <img src={blogForm.image_url} alt="" className="mt-2 h-20 rounded object-cover" />}
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={blogForm.published} onCheckedChange={v => setBlogForm(f => ({ ...f, published: v }))} />
                  <span className="text-sm">Published</span>
                </div>
                <div className="flex gap-2">
                  <Button onClick={saveBlog} disabled={saving || !blogForm.title || !blogForm.slug || !blogForm.content}>
                    <Save className="w-4 h-4 mr-1" /> {editingBlog ? 'Update' : 'Create'}
                  </Button>
                  {editingBlog && (
                    <Button variant="outline" onClick={() => { setEditingBlog(null); setBlogForm({ title: '', slug: '', excerpt: '', content: '', image_url: '', published: false }); }}>
                      Cancel
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif font-bold text-xl">All Posts ({blogs.length})</h2>
                {blogs.map(b => (
                  <div key={b.id} className="bg-card border rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{b.title}</p>
                      <p className="text-xs text-muted-foreground">/{b.slug} · {b.published ? '✅ Published' : '📝 Draft'}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" onClick={() => {
                        setEditingBlog(b.id);
                        setBlogForm({ title: b.title, slug: b.slug, excerpt: b.excerpt || '', content: b.content, image_url: b.image_url || '', published: b.published });
                      }}>Edit</Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => deleteBlog(b.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {blogs.length === 0 && <p className="text-sm text-muted-foreground">No blog posts yet</p>}
              </div>
            </div>
          </TabsContent>

          {/* GALLERY TAB */}
          <TabsContent value="gallery">
            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-6 space-y-4">
                <h2 className="font-serif font-bold text-xl">Add Image</h2>
                <div>
                  <label className="text-sm font-medium mb-1 block">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleGalleryUpload} className="text-sm" />
                  {galleryForm.image_url && <img src={galleryForm.image_url} alt="" className="mt-2 h-20 rounded object-cover" />}
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Alt Text</label>
                  <Input value={galleryForm.alt_text} onChange={e => setGalleryForm(f => ({ ...f, alt_text: e.target.value }))} placeholder="Describe the image" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Category</label>
                  <Input value={galleryForm.category} onChange={e => setGalleryForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. results, clinic, team" />
                </div>
                <Button onClick={addGalleryImage} disabled={saving || !galleryForm.image_url}>
                  <Plus className="w-4 h-4 mr-1" /> Add to Gallery
                </Button>
              </div>

              <div>
                <h2 className="font-serif font-bold text-xl mb-3">Gallery Images ({gallery.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {gallery.map(img => (
                    <div key={img.id} className="relative group rounded-lg overflow-hidden border">
                      <img src={img.image_url} alt={img.alt_text || ''} className="w-full h-32 object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm" variant="destructive" onClick={() => deleteGalleryImage(img.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs p-1 text-muted-foreground truncate">{img.category}</p>
                    </div>
                  ))}
                </div>
                {gallery.length === 0 && <p className="text-sm text-muted-foreground">No gallery images yet</p>}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;

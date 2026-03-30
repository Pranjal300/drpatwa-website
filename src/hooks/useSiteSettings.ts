import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type SiteSettings = Record<string, string>;

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('key, value');
      if (error) throw error;
      const settings: SiteSettings = {};
      data?.forEach(row => { settings[row.key] = row.value; });
      return settings;
    },
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
};

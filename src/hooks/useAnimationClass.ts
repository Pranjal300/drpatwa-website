import { useEffect } from 'react';
import { useSiteSettings } from '@/hooks/useSiteSettings';

/**
 * Adds/removes 'animation-light' class on <body> based on the
 * animation_mode site setting. When mode is 'light', CSS kills
 * all .animate-fade-in animations for low-end device performance.
 */
export const useAnimationClass = () => {
  const { data: settings } = useSiteSettings();
  const mode = settings?.animation_mode || 'light';

  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('animation-light');
    } else {
      document.body.classList.remove('animation-light');
    }
    return () => {
      document.body.classList.remove('animation-light');
    };
  }, [mode]);
};

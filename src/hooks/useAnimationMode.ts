import { useSiteSettings } from './useSiteSettings';

export type AnimationMode = 'light' | 'rich';

export const useAnimationMode = (): AnimationMode => {
  const { data: settings } = useSiteSettings();
  return (settings?.animation_mode as AnimationMode) || 'light';
};

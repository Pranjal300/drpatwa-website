import { useEffect, useRef } from 'react';
import { useAnimationMode } from './useAnimationMode';

/**
 * Lightweight scroll-reveal using Intersection Observer.
 * In "rich" mode: elements start invisible and fade/slide in when scrolled into view.
 * In "light" mode: elements are always visible (no animation).
 */
export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const mode = useAnimationMode();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (mode === 'light') {
      // Light mode: make everything visible immediately
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    // Rich mode: start hidden
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  return ref;
};

/**
 * Same as useScrollReveal but returns a callback ref for use in .map() loops.
 * Call getRef(index) for each item to get staggered delays.
 */
export const useScrollRevealList = (count: number) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const mode = useAnimationMode();

  useEffect(() => {
    if (mode === 'light') {
      refs.current.forEach(el => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    refs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px) scale(0.97)';
        el.style.transition = `opacity 0.45s ease-out ${i * 0.07}s, transform 0.45s ease-out ${i * 0.07}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [mode]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return setRef;
};

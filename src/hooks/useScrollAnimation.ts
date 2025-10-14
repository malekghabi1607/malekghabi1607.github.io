import { useEffect, useRef, type DependencyList } from 'react';

/**
 * Observe les éléments .scroll-animate et ajoute .visible
 * quand ils entrent dans le viewport. Se reconfigure quand
 * les dépendances changent (langue, thème, etc.).
 */
export function useScrollAnimation(deps: DependencyList = []): void {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    elementsRef.current = Array.from(elements) as HTMLElement[];

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, deps);


  
}
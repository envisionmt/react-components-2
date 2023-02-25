import React from 'react';

export function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}) {
  React.useEffect(() => {
    let observer;
    let el;
    if (enabled) {
      el = target && target.current;

      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
        {
          root: root && root.current,
          rootMargin,
          threshold,
        }
      );

      if (el) observer.observe(el);
    }

    return () => {
      if (observer) observer.unobserve(el);
    };
  }, [target.current, enabled]);
}

import { useState, useEffect } from 'react';

export function useClickOutside(el, initialState, open) {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = async (e) => {
      // If the active element exists and is clicked outside of
      if (
        el.current !== null &&
        !el.current.contains(e.target) &&
        open &&
        e.target.tagName !== 'BUTTON' &&
        e.target.tagName !== 'IMG' &&
        e.target.tagName !== 'SELECT' &&
        e.target.tagName !== 'INPUT'
      ) {
        await setIsActive(true);
        await setIsActive(false);
      }
    };
    // If the item is active (ie open) then listen for clicks outside
    if (open) window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el, open]);

  return [isActive, setIsActive];
}

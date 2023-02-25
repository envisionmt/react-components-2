import { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

export const useResize = (targetRef) => {
  const isMenuOpen = useSelector((state) => state.mainMenu.menuOpen);

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0,
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    if (dimensions.width === 0) {
      handleResize();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions]);

  useEffect(() => {
    handleResize();
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return { dimensions };
};

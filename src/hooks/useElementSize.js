import { useState, useEffect } from 'react';

const useElementSize = (elementRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth);
    setHeight(elementRef.current.offsetHeight);

    const handleResize = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
        setHeight(elementRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef.current]);

  return [width, height];
};

export default useElementSize;

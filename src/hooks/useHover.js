import React, { useEffect } from 'react';

export default function useHover() {
  const [hovered, setHovered] = React.useState(false);

  const ref = React.useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
    }
    return () => {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref]);

  return [ref, hovered];
}

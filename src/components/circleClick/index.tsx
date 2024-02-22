import React, { useState, useEffect } from 'react';
import { Circle } from './styles';

const CircleClick: React.FC = () => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [firstClick, setFirstClick] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    const handleClick = () => {
      if (firstClick && !isExpanded) {
        setIsExpanded(true);
        setFirstClick(false);
        setTimeout(() => {
          setIsExpanded(false);
          setFirstClick(true);
        }, 300);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [firstClick, isExpanded]);

  return (
    <Circle
      mousex={mouseX}
      mousey={mouseY}
      isexpanded={isExpanded.toString()}
      animate={{ scale: isExpanded ? 2 : 0.5, opacity: isExpanded ? 0.5 : 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default CircleClick;

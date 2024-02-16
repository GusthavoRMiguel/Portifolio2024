import React, { useState, useEffect } from 'react';
import { Circle } from './styles';

const CircleClick: React.FC = () => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstClick, setFirstClick] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (firstClick) {
        setIsExpanded(true);
        setFirstClick(false);

        setTimeout(() => {
          setIsExpanded(false);
          setFirstClick(true);
        }, 300);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [firstClick]);
  return (
    <Circle
      mouseX={mouseX}
      mouseY={mouseY}
      isExpanded={isExpanded}
      animate={{ scale: !isExpanded ? 0.5 : 2, opacity: !isExpanded ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default CircleClick;

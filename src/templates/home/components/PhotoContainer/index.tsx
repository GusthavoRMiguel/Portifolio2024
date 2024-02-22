import { useState, useEffect, useRef } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { ShadowBase, ShadowContainer, Image, ImageDefault } from './styles';

interface PhotoContainerProps {
  imageUrl: string;
  isSidebarOpen: boolean;
}

const PhotoContainer = ({ imageUrl, isSidebarOpen }: PhotoContainerProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [mouseAngle, setMouseAngle] = useState<number>(0);

  useEffect(() => {
    const updateShadowDirection = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { left, width, top, height } =
        imageRef.current.getBoundingClientRect();
      const imageCenterX = left + width / 2;
      const imageCenterY = top + height / 2;

      const deltaX = e.clientX - imageCenterX;
      const deltaY = e.clientY - imageCenterY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      if (angle < 0) {
        angle += 360;
      }

      setMouseAngle(angle);
    };

    document.addEventListener('mousemove', updateShadowDirection);

    return () => {
      document.removeEventListener('mousemove', updateShadowDirection);
    };
  }, []);

  return (
    <ShadowContainer className={isSidebarOpen ? 'sidebar-open' : ''}>
      <ShadowBase angle={mouseAngle} />

      {imageUrl === '' ? (
        <ImageDefault>
          <FaUserAstronaut />
        </ImageDefault>
      ) : (
        <Image ref={imageRef} src={imageUrl} alt="Image" />
      )}
    </ShadowContainer>
  );
};

export default PhotoContainer;

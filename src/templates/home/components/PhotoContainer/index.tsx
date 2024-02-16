import { useState, useEffect } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { ConeBase, ConeContainer, Image, ImageDefault } from './styles';

interface PhotoContainerProps {
  imageUrl: string;
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ imageUrl }) => {
  const [mouseAngle, setMouseAngle] = useState<number>(0);

  useEffect(() => {
    const updateConeDirection = (e: MouseEvent) => {
      const image = document.getElementById('image');
      if (!image) return;

      const imageRect = image.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const imageCenterY = imageRect.top + imageRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - imageCenterX;
      const deltaY = mouseY - imageCenterY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      if (angle < 0) {
        angle += 360;
      }

      setMouseAngle(angle);
    };

    document.addEventListener('mousemove', updateConeDirection);

    return () => {
      document.removeEventListener('mousemove', updateConeDirection);
    };
  }, []);

  return (
    <ConeContainer>
      <ConeBase angle={mouseAngle} />

      {imageUrl === '' ? (
        <ImageDefault id="image">
          <FaUserAstronaut />
        </ImageDefault>
      ) : (
        <Image id="image" src={imageUrl} alt="Image" />
      )}
    </ConeContainer>
  );
};

export default PhotoContainer;

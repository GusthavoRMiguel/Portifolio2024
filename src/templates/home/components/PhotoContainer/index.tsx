import { useState, useEffect } from 'react';
import { ConeBase, ConeContainer, Image } from './styles';

interface PhotoContainerProps {
  imageUrl: string;
}

const PhotoContainer: React.FC<PhotoContainerProps> = ({ imageUrl }) => {
  const [coneDirection, setConeDirection] = useState<string>('>');

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

      let direction = '';

      if (angle >= 0 && angle <= 10) {
        direction = 'p1';
      } else if (angle > 10 && angle <= 20) {
        direction = 'p2';
      } else if (angle > 20 && angle <= 30) {
        direction = 'p3';
      } else if (angle > 30 && angle <= 40) {
        direction = 'p4';
      } else if (angle > 40 && angle <= 50) {
        direction = 'p5';
      } else if (angle > 50 && angle <= 60) {
        direction = 'p6';
      } else if (angle > 60 && angle <= 70) {
        direction = 'p7';
      } else if (angle > 70 && angle <= 80) {
        direction = 'p8';
      } else if (angle > 80 && angle <= 90) {
        direction = 'p9';
      } else if (angle > 90 && angle <= 100) {
        direction = 'p10';
      } else if (angle > 100 && angle <= 110) {
        direction = 'p11';
      } else if (angle > 110 && angle <= 120) {
        direction = 'p12';
      } else if (angle > 120 && angle <= 130) {
        direction = 'p13';
      } else if (angle > 130 && angle <= 140) {
        direction = 'p14';
      } else if (angle > 140 && angle <= 150) {
        direction = 'p15';
      } else if (angle > 150 && angle <= 160) {
        direction = 'p16';
      } else if (angle > 160 && angle <= 170) {
        direction = 'p17';
      } else if (angle > 170 && angle <= 180) {
        direction = 'p18';
      } else if (angle > 180 && angle <= 190) {
        direction = 'p19';
      } else if (angle > 190 && angle <= 200) {
        direction = 'p20';
      } else if (angle > 200 && angle <= 210) {
        direction = 'p21';
      } else if (angle > 210 && angle <= 220) {
        direction = 'p22';
      } else if (angle > 220 && angle <= 230) {
        direction = 'p23';
      } else if (angle > 230 && angle <= 240) {
        direction = 'p24';
      } else if (angle > 240 && angle <= 250) {
        direction = 'p25';
      } else if (angle > 250 && angle <= 260) {
        direction = 'p26';
      } else if (angle > 260 && angle <= 270) {
        direction = 'p27';
      } else if (angle > 270 && angle <= 280) {
        direction = 'p28';
      } else if (angle > 280 && angle <= 290) {
        direction = 'p29';
      } else if (angle > 290 && angle <= 300) {
        direction = 'p30';
      } else if (angle > 300 && angle <= 310) {
        direction = 'p31';
      } else if (angle > 310 && angle <= 320) {
        direction = 'p32';
      } else if (angle > 320 && angle <= 330) {
        direction = 'p33';
      } else if (angle > 330 && angle <= 340) {
        direction = 'p34';
      } else if (angle > 340 && angle <= 360) {
        direction = 'p35';
      } else if (angle > 360 && angle <= 0) {
        direction = 'p36';
      }

      setConeDirection(direction);
    };

    document.addEventListener('mousemove', updateConeDirection);

    return () => {
      document.removeEventListener('mousemove', updateConeDirection);
    };
  }, []);

  return (
    <ConeContainer>
      <ConeBase direction={coneDirection} />
      <Image id="image" src={imageUrl} alt="Image" />
    </ConeContainer>
  );
};

export default PhotoContainer;

import styled from 'styled-components';

export const ConeContainer = styled.div`
  position: fixed;
  top: 25vh;
  right: 25vw;

  @media (max-width: 940px) {
    top: 5vh;
    right: 20vw;
  }
`;

interface ConeBaseProps {
  angle: number;
}

export const ConeBase = styled.div<ConeBaseProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg);
  height: 22rem;
  border-top: 10.5rem solid transparent;
  border-bottom: 10.5rem solid transparent;
  border-left: 22rem solid rgba(1, 1, 1, 0.1);
  z-index: -1;
  border-radius: 100%;

  ${(props) => {
    // Define a distância do cone até o centro da imagem
    const distance = 56; // Valor do raio do cone

    // Calcula as coordenadas do cone com base no ângulo
    const radians = props.angle * (Math.PI / 180);
    const coneCenterX = Math.cos(radians) * distance;
    const coneCenterY = Math.sin(radians) * distance;

    // Ajusta as coordenadas considerando o centro da imagem
    const finalX = 50 + coneCenterX; // 50% é o centro da imagem
    const finalY = 50 + coneCenterY; // 50% é o centro da imagem

    return `
      top: ${finalY}%;
      left: ${finalX}%;
    `;
  }}

  @media (max-width:940px) {
    display: none;
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  z-index: 2;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 1200px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const ImageDefault = styled.div`
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  z-index: 2;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;

  svg {
    width: 100%;
    height: 75%;
  }
`;

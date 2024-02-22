import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const ShadowContainer = styled.div`
  position: fixed;
  top: 30vh;
  right: 35vw;

  transition: right ${theme.transition.default};

  &.sidebar-open {
    top: 30vh;
    right: 20vw;
  }

  @media (max-width: 940px) {
    top: 5vh;
    right: 22vw;

    &.sidebar-open {
      top: 5vh;
      right: 22vw;
    }
  }
`;

interface ShadowBaseProps {
  angle: number;
}

export const ShadowBase = styled.div<ShadowBaseProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${({ angle }) => angle}deg);

  height: 20rem;
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 19rem solid white;
  box-shadow: 20px 0px 20px 20px rgba(0, 0, 0, 0.15);
  z-index: -1;
  border-radius: 100%;

  ${({ angle }) => {
    const distance = 5;

    const radians = angle * (Math.PI / 180);
    const shadowCenterX = Math.cos(radians) * distance;
    const shadowCenterY = Math.sin(radians) * distance;

    const finalX = 50 + shadowCenterX;
    const finalY = 50 + shadowCenterY;

    return css`
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

  @media (min-width: 1200px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const ImageDefault = styled.div`
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  z-index: 2;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
    height: 75%;
  }

  @media (min-width: 1200px) {
    width: 20rem;
    height: 20rem;
  }
`;

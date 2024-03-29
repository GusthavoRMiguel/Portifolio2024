import styled, { css } from 'styled-components';

export const ShadowContainer = styled.div`
  position: fixed;
  top: 30vh;
  right: 35vw;

  transition: right ${(props) => props.theme.transition.default};

  &.sidebar-open {
    top: 30vh;
    right: 20vw;
  }

  @media (max-width: 640px) {
    top: 11vh;
    right: 19vw;

    &.sidebar-open {
      top: 11vh;
      right: 19vw;
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
  height: 13rem;
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 12rem solid white;
  box-shadow: ${(props) => props.theme.box.shadow_secondary};
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

  @media (min-width:1200px) {
    height: 20rem;
    border-left: 19rem solid white;
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

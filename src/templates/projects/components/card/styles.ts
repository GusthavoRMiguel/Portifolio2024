import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';

interface StatusProps {
  color: string;
}

interface FlipProps {
  isFlipped: boolean;
}

export const Container = styled.div<FlipProps>`
  padding: 1rem;
  width: fit-content;
  @media (max-width: 640px) {
    padding: 0.5rem;
  }

  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 26rem;
  height: 32rem;
  position: relative;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.text_tertiary};

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: grabbing;
    border-width: 2px;
    border-color: #4f46e5;
    color: ${(props) => props.theme.colors.text_tertiary_hover};
    opacity: 0.75;
  }

  @media (max-width: 640px) {
    width: 22rem;
    height: 32rem;
  }
`;
export const FlippedContent = styled.div<FlipProps>`
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'none')};
  transform-origin: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  place-content: center;
  margin-top: 25%;

  p {
    cursor: not-allowed;
    border: solid 1px;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: #edf2f7;
  }

  > a,
  button {
    cursor: pointer;
    border: solid 1px;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  > a,
  p,
  button {
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.text_hover};
    }
  }
`;

export const BoxImage = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;

  img {
    width: 100%;
    height: 20rem;
  }
`;
export const Status = styled.div<StatusProps>`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  border-top-left-radius: 35%;
  border-bottom-left-radius: 35%;
  text-align: center;
  font-weight: bold;
  font-size: 0.75rem;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  background-color: ${({ color }) => color};
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 100%;
    border-width: 4px;
    object-position: center;
    object-fit: cover;
    border-color: #ffffff;
    margin-right: 0.5rem;
    height: 4rem;
    width: 4rem;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
  }

  h2 {
    font-size: 0.875rem;
    font-weight: lighter;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const StyledModal = styled(Modal)`
  .ui.modal.scrolling.content {
    padding: 1rem;
  }

  .ui.modal > .content {
    padding: 1rem !important;
  }
  .gridImage {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem;

    @media (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`;

export const ImageModal = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 1rem;
  border-radius: 10px;
  gap: 10px;

  @media (max-width: 640px) {
    justify-self: center;
    align-items: center;
    img {
      width: 100%;
      height: 200px;
    }
  }
`;

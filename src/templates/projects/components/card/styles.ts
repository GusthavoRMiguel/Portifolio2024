import theme from '@/styles/theme';
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
  background-color: white;
  width: 26rem;
  height: 32rem;
  position: relative;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  color: #2d3748;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);
    background-color: ${theme.colors.gray_500};
    cursor: grabbing;
    border-width: 2px;
    border-color: #4f46e5;
    color: #edf2f7;
    opacity: 0.75;
  }

  @media (max-width: 640px) {
    width: 23rem;
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
  height: 100%;
  place-content: center;

  p {
    cursor: not-allowed;
    border: solid 1px;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${theme.colors.gray_300};
    color: white;
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
    background-color: ${theme.colors.gray_300};
    color: white;
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

export const StyledModal = styled(Modal)``;

import styled from 'styled-components';
import theme from '@/styles/theme';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;

  @media (max-width: 640px) {
    overflow-y: auto;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  left: 8vw;
  position: relative;
  transition: left ${theme.transition.default};
  height: calc(100vh - 8vh);
  width: 92vw;
  @media (min-width: 1020px) {
    left: 5vw;
    width: 95vw;
    &.sidebar-open {
      left: 20vw;
      width: 80vw;
    }
  }

  @media (min-width: 1800px) {
    &.sidebar-open {
      left: 15vw;
      width: 75vw;
    }
  }
`;

export const Heading = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-inline: 2rem;
  margin-bottom: 2vh;
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  h1 {
    margin-top: 8px;
    font-size: 1.5rem;
    font-weight: 600;

    span {
      color: #4f46e5;
    }
  }

  p {
    margin-top: 4px;
    font-size: 0.875rem;
    text-align: justify;
    margin-right: 20px;
  }
`;

export const InfoGrid = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  div {
    font-size: 1rem;
    padding-left: 20px;
    padding-right: 20px;

    p {
      border-bottom: 1px solid #cbd5e0;
      margin-bottom: 10px;
      padding-bottom: 10px;

      span {
        margin-right: 10px;
        font-weight: 500;
      }
    }
  }
`;

export const Download = styled.div`
  display: grid;
  justify-items: center;
  place-content: center;
  width: 100%;
  margin-top: 4rem;

  button {
    display: block;
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
    color: #fefefe;
    font-weight: 600;
    border-radius: 0.375rem;
    background-color: #4f46e5; /* Alterei a cor de fundo para indigo */
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4338ca; /* Alterei a cor de fundo ao passar o mouse */
    }

    @media (min-width: 768px) {
      margin-left: 0; /* Remove a margem à esquerda em telas maiores */
    }
  }
`;

export const Spacer = styled.div`
  height: 8vh;
  background-color: ${theme.colors.blackQuantum};
  z-index: 2;

  @media (max-width: 620px) {
    height: 14vh;
  }
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 5px;
  left: 5vw;
  right: 0;
  width: 95vw;

  transition: left ${theme.transition.default};
  &.sidebar-open {
    width: 80vw;
    left: 20vw;
  }

  ul {
    padding-inline-start: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
      list-style: none;
      font-size: 0.5rem;
      span {
        text-decoration: none;
        color: ${theme.colors.gray_300};

        &:hover {
          color: ${theme.colors.green};
        }
      }
    }
  }

  @media (min-width: 390px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 600px) {
    margin-bottom: 20px;
    bottom: 10px;

    ul {
      flex-direction: row;
      li {
        font-size: 20px;
      }
    }
  }
  @media (min-width: 900px) {
    margin-bottom: 0px;
    ul {
      li {
        font-size: 25px;
      }
    }
  }
  @media (min-width: 1200px) {
    margin-bottom: 0%;
    ul {
      li {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 1800px) {
    &.sidebar-open {
      width: 85vw;
      left: 15vw;
    }
  }
`;

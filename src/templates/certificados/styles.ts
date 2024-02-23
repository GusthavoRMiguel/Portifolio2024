import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  left: 8vw;
  position: relative;
  transition: left ${(props) => props.theme.transition.default};
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

export const ListCards = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  padding-inline: 5rem;
  height: 80vh;
  margin-left: 2vw;
  width: 92vw;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  ::-webkit-scrollbar-track {
    background-color: #ccc !important;
  }

  @media (max-width: 640px) {
    margin-top: 5vh;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-inline: 0.5rem;
    margin-left: 5vw;
    width: 84vw;
    height: 65vh;
  }
`;

export const CardPage = styled.div`
  height: 80vh;
  scroll-snap-align: start;
  padding-top: 2rem;

  @media (max-width: 640px) {
    height: 65vh;
  }
`;

export const Spacer = styled.div`
  height: 8vh;
  background-color: ${(props) => props.theme.colors.secondary};
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

  transition: left ${(props) => props.theme.transition.default};
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
        color: ${(props) => props.theme.colors.text};

        &:hover {
          color: ${(props) => props.theme.colors.text_hover};
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

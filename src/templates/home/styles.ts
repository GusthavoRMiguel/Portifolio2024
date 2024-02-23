import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.main`
  display: flex;
`;

export const Content = styled.div`
  padding: 3rem;
  display: flex;
  position: relative;
  left: 8vw;
  width: 92vw;
  transition: left ${(props) => props.theme.transition.default};

  @media (min-width: 1020px) {
    left: 5vw;
    width: 95vw;
    padding: 5rem;
    &.sidebar-open {
      left: 20vw;
      width: 80vw;
    }
  }

  @media (min-width: 1800px) {
    &.sidebar-open {
      left: 15vw;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    display: flow-root;
    font-size: 3.7rem;
    color: ${(props) => props.theme.colors.text};
    span {
      font-size: 3.7rem;
      margin-left: 10px;
      color: ${(props) => props.theme.colors.text};
      font-weight: 800;
    }
  }
  @media (max-width: 640px) {
    margin-top: 35vh;
    text-align: center;
    h1 {
      display: grid;
      font-size: 2.1rem;
      span {
        font-size: 2.1rem;
      }
    }
  }
`;

export const FlexLinks = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  gap: 1rem;
  a {
    button {
      display: inline-flex;
      align-items: center;
      margin-left: 0.5rem;
      padding: 0.5rem;
      font-weight: 600;
      color: #ffffff;
      border: none;
      border-radius: 10px;

      svg {
        width: 50px;
        height: auto;
      }
    }
    .github {
      background-color: #4a5568;
    }

    .linkedin {
      background-color: #3182ce;
    }

    .whatsapp {
      background-color: #38a169;
    }
  }

  @media (max-width: 960px) {
    place-content: center;

    a {
      button {
        svg {
          width: 40px;
          height: auto;
        }
      }
    }
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
          font-weight: 800;
          cursor: pointer;
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

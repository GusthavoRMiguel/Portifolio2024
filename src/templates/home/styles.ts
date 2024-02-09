import styled from 'styled-components';
import theme from '@/styles/theme';
import { motion } from 'framer-motion';

export const Container = styled.main`
  display: flex;
`;

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  position: relative;
  left: 5vw;
  transition: left ${theme.transition.default};
  &.sidebar-open {
    left: 20vw;
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
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
    span {
      font-size: 2.5rem;
      margin-left: 10px;
      color: ${theme.colors.red_50};
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
        width: 40px;
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

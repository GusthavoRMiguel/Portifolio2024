import styled from 'styled-components';

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
  transition: left ${(props) => props.theme.transition.default};
  height: 100vh;
  width: 90vw;

  @media (min-width: 1020px) {
    left: 4vw;
    width: 95vw;
    &.sidebar-open {
      left: 19vw;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1.5rem;
  padding-inline: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    padding-top: 1rem;
    padding-inline: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 6rem;
  color: ${(props) => props.theme.colors.text};

  h1 {
    margin-top: 8px;
    font-size: 2.1rem;
    font-weight: 600;
    display: flow-root;
    margin-bottom: 1.5rem;

    span {
      color: ${(props) => props.theme.colors.text_secondary};
    }
  }

  p {
    padding-right: 0.5rem;
    font-size: 1.05rem;
    text-align: justify;
    line-height: 1.8rem;
  }

  @media (max-width: 640px) {
    padding-inline: 1rem;

    h1 {
      font-size: 1.2rem;

      margin-bottom: 1.5rem;

      span {
        min-inline-size: max-content;
      }
    }

    p {
      padding-right: 0.5rem;
      font-size: 0.9rem;
      text-align: justify;
      line-height: 1.4rem;
    }
  }
`;

export const InfoGrid = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};

  .line {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    div {
      font-size: 1rem;
      padding-inline: 1rem;

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
  }

  @media (min-width: 640px) {
    .line {
      grid-template-columns: repeat(3, 1fr);
      div {
        padding-inline: 6rem;
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
    background-color: ${(props) => props.theme.colors.blue};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
    }

    @media (min-width: 768px) {
      margin-left: 0;
    }
  }
`;

export const ProgressContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.text};
  padding-inline: 6rem;

  > div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    .languages {
      font-size: 1rem;

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        place-content: center;
        color: ${(props) => props.theme.colors.blue};
        margin-bottom: 1rem;
      }
    }
    @media (min-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 640px) {
    padding-inline: 1rem;
  }
`;

export const TimeLineContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.text};
  padding-inline: 6rem;

  > div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    padding-inline: 1rem;
  }
`;

export const TableInfo = styled.div`
  font-size: 1rem;
  padding-inline: 1rem;
  color: ${(props) => props.theme.colors.text_tertiary};
  @media (min-width: 1024px) {
    padding-inline: 4rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    place-content: center;
    color: #4f46e5;
    margin-bottom: 1rem;
  }

  .box {
    background-color: #ffffff;
    border-radius: 0.375rem;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
      0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    padding: 0.5rem;

    .content {
      width: 80%;
      margin: 2rem;
      position: relative;

      .line {
        border-right-width: 2px;
        border-right-color: #7c3aed;
        border-right-style: solid;
        position: absolute;
        height: 100%;
        top: 0;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const Footer = styled(motion.footer)`
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

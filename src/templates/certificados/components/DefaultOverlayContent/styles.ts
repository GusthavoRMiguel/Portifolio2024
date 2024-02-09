import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Heading = styled.div`
  width: 100vw;
  padding-top: 1.5rem;
  padding-inline: 2rem;
`;

export const Content = styled.div`
  display: flex;
  height: 50vh;
  margin-bottom: 10vh;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-bottom: 20vh;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: bolder;
    align-self: center;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    font-size: 1rem;
    list-style-type: none;
  }
  li span {
    font-weight: bold;
  }

  @media (max-width: 620px) {
    h2 {
      font-size: 1.4rem;
    }

    ul {
      margin-top: 1rem;
      padding-inline: 1rem;
    }

    li {
      margin-top: 1rem;
      font-size: 0.8rem;
      list-style-type: none;
    }
  }
`;

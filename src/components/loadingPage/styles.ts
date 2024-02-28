import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161519;
  overflow-y: hidden;

  img {
    width: max-content;
    height: max-content;
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;

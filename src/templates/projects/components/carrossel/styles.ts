import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  color: white;
`;

export const Content = styled.div`
  height: 60vh;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 1rem;
  color: black;

  h2 {
    place-content: center;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 90% !important;
  }
`;

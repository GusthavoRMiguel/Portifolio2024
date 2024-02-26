import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow: hidden;
`;

export const Heading = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1.5rem;
  padding-inline: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    padding-top: 1rem;
    padding-inline: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 95vw;
  left: 5vw;
  position: absolute;

  &.open-sidebar {
    left: 20vw;
    width: 80vw;
  }
`;

export const BoxMain = styled.main`
  padding-inline: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const BoxForm = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: top;

  .grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export const BoxContact = styled.div`
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2rem 4rem;
  margin-right: 0.5rem;

  h1 {
    align-self: center;
    font-size: 3rem;
    line-height: 1;
    color: ${(props) => props.theme.colors.text};
    letter-spacing: -0.025em;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    align-self: center;
    font-weight: 500;
    font-size: 1.5rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
  }

  .mobile {
    display: none;
  }

  .item {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #9ca3af;

    svg {
      width: 30px;
      height: 100%;
    }

    div {
      margin-left: 1rem;
      letter-spacing: 0.025em;
      font-weight: 600;
      width: 24rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.text_hover};
    }
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }

    .mobile {
      align-self: center;
      display: block;
      font-weight: 500;
      font-size: 1.5rem;
      color: #6b7280;
      margin-top: 0.5rem;
    }
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  justify-content: center;
  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
  }
`;

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: transparent;
  border-radius: 0.5rem;
  margin-left: 2rem;

  form {
    display: grid;
    grid-gap: 1rem;

    label {
      font-size: 1rem;
      color: #495057;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #ced4da;
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }

      &:disabled {
        background-color: #b1c7e2;
        cursor: not-allowed;
      }
    }
  }
`;

export const ThankYouContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  margin-left: 2rem;

  h1 {
    font-size: 2rem;
    color: #343a40;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #495057;
    margin-bottom: 2rem;
  }
`;

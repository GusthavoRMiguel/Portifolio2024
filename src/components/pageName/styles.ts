import styled from 'styled-components';

interface BorderLineProps {
  width: string;
}

export const PageContainer = styled.div``;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-top: 1.25rem;
  color: ${(props) => props.theme.colors.text};
`;

export const BorderLine = styled.p<BorderLineProps>`
  border-top-width: 0.25rem;
  border-top-style: solid;
  border-top-color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => props.width || '100%'};
  margin-top: 0.625rem;
`;

import styled from 'styled-components';

interface LanguageProps {
  width: string;
}

export const LanguageContainer = styled.div`
  padding-bottom: 1rem;
`;

export const LanguageText = styled.p`
  margin-left: 0.5rem;
  font-weight: 500;
`;

export const ProgressBarContainer = styled.div`
  background-color: #6b7280;
  border-radius: 9999px;
`;

export const ProgressBar = styled.div<LanguageProps>`
  background-color: #7c3aed;
  padding: 0.125rem 0;
  border-radius: 9999px;
  width: ${(props) => props.width};
`;

export const PercentageText = styled.div`
  color: #ffffff;
  font-size: 0.75rem;
  background-color: #805ad5;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  display: inline-block;
`;

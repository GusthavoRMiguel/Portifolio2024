import {
  LanguageContainer,
  LanguageText,
  PercentageText,
  ProgressBar,
  ProgressBarContainer
} from './styles';

interface LanguageProps {
  language: string;
  percent: number;
  width: string;
}

function ProgLanguage({ language, percent, width }: LanguageProps) {
  return (
    <LanguageContainer>
      <LanguageText>{language}</LanguageText>
      <ProgressBarContainer>
        <ProgressBar width={width}>
          <PercentageText>{percent}%</PercentageText>
        </ProgressBar>
      </ProgressBarContainer>
    </LanguageContainer>
  );
}

export default ProgLanguage;

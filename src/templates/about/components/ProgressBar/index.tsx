import {
  LanguageContainer,
  LanguageText,
  PercentageText,
  Bar,
  ProgressBarContainer
} from './styles';

interface LanguageProps {
  language: string;
  percent: number;
  width: string;
}

function ProgressBar({ language, percent, width }: LanguageProps) {
  return (
    <LanguageContainer>
      <LanguageText>{language}</LanguageText>
      <ProgressBarContainer>
        <Bar width={width}>
          <PercentageText>{percent}%</PercentageText>
        </Bar>
      </ProgressBarContainer>
    </LanguageContainer>
  );
}

export default ProgressBar;

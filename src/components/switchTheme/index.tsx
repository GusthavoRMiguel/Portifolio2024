import { useTheme } from '@/hooks';
import { Container, StyledSwitch, UncheckedIcon } from './styles';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';

import { GiIsland } from 'react-icons/gi';

const CustomSwitch = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <StyledSwitch
        onChange={toggleTheme}
        checked={theme.title === 'light'}
        handleDiameter={40}
        height={40}
        width={120}
        activeBoxShadow={`0px 0px 2px 3px ${theme.colors.secondary}`}
        checkedIcon={
          <UncheckedIcon>
            <GiIsland size={40} />
          </UncheckedIcon>
        }
        uncheckedIcon={
          <UncheckedIcon>
            <img src="/montain.svg" alt="montain" />
          </UncheckedIcon>
        }
        onColor="#add8e6"
        uncheckedHandleIcon={
          <div>
            <RiMoonClearLine size={40} color="#ffff" />
          </div>
        }
        checkedHandleIcon={
          <div>
            <RiSunLine size={40} color="#f4d83e" />
          </div>
        }
      />
    </Container>
  );
};

export default CustomSwitch;

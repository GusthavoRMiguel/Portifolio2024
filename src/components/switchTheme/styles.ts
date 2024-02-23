import styled from 'styled-components';
import Switch from 'react-switch';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 1vh;
  right: 1vw;

  @media (max-width: 640px) {
    right: 4vw;
  }
`;

export const StyledSwitch = styled(Switch)`
  .react-switch-handle {
    background-color: ${(props) => props.theme.colors.primary} !important;
  }

  .react-switch-bg {
    div {
      width: 80px !important;
    }
    @media (max-width: 640px) {
      width: 110px;
      div {
        width: 75px !important;
      }
    }
  }
`;

export const UncheckedIcon = styled.div`
  img {
    width: 100%;
    height: 40px;
  }

  svg {
    width: 70px;
    height: 40px;

    @media (max-width: 640px) {
      width: 65px !important;
    }
  }
`;

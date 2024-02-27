import styled from 'styled-components';

interface SideBarProps {
  open: boolean;
}
export const SidebarContainer = styled.div<SideBarProps>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-90vw')};
  height: 100%;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.sidebar};
  box-shadow: ${(props) => props.theme.box.shadow};
  transition: left ${(props) => props.theme.transition.default};
  z-index: ${(props) => props.theme.layers.modal};
  justify-content: center;
  align-items: left;
  text-align: justify;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    left: ${({ open }) => (open ? '0' : '-15vw')};
    width: 20vw;
  }
  @media (min-width: 1600px) {
    left: ${({ open }) => (open ? '0' : '-10vw')};
    width: 15vw;
  }
`;

export const ToggleButton = styled.button<SideBarProps>`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: ${({ open }) => (open ? '1vw' : '2vw')};
  top: 1vh;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  > svg {
    width: 20px;
    height: 20px;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      background-color: transparent;
      opacity: 0.5;
    }
  }
  > svg:hover {
  }
`;
export const Links = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;

  > button,
  a {
    border: none;
    display: flex;
    gap: 10px;
    width: ${({ open }) => (open ? '90%' : '100%')};
    align-self: center;
    border-radius: 10px;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    margin-bottom: 20px;
    transition: color 0.3s ease;
    cursor: pointer;
    padding-left: 2rem;
    padding-bottom: 4px;
    padding-top: 4px;
    background: ${({ open }) =>
      open ? (props) => props.theme.background.linear.primary : 'transparent'};
    > svg {
      margin-left: ${({ open }) => (open ? '0' : 'auto')};
      margin-right: ${({ open }) => (open ? '0' : '2vw')};
      width: 25px;
      height: 25px;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  > button:hover,
  a:hover {
    background: ${({ open }) =>
      open ? (props) => props.theme.background.linear.hover : 'transparent'};

    font-weight: bolder;
    border: 20px 20px;
    color: ${(props) => props.theme.colors.text_hover};
  }
`;

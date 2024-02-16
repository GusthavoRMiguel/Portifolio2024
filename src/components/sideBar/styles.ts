import styled from 'styled-components';
import theme from '../../styles/theme';

interface SideBarProps {
  open: boolean;
}
export const SidebarContainer = styled.div<SideBarProps>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-90vw')};
  height: 100%;
  width: 100vw;
  background-color: ${theme.colors.whiteSnow};
  box-shadow: ${theme.box.shadow};
  transition: left ${theme.transition.default};
  z-index: ${theme.layers.modal};
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
  color: ${theme.colors.gray_300};
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: ${({ open }) => (open ? '1vw' : '2vw')};
  top: 1vh;

  &:hover {
    color: ${theme.colors.blackQuantum};
  }
  > svg {
    width: 20px;
    height: 20px;
  }
  > svg:hover {
    background-color: transparent;
    opacity: 0.5;
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
    width: 100%;
    justify-content: center;
    color: ${theme.colors.gray_300};
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    margin-bottom: 20px;
    transition: color 0.3s ease;
    cursor: pointer;
    padding-left: 2rem;
    padding-bottom: 3px;
    padding-top: 3px;
    background: ${({ open }) =>
      open
        ? `linear-gradient(
      90deg,
      ${theme.colors.white} 0%,
      ${theme.colors.gray_50} 15%,
      ${theme.colors.gray_50} 50%,
      ${theme.colors.gray_50} 85%,
      ${theme.colors.white} 100%
    )`
        : 'transparent'};
    > svg {
      margin-left: ${({ open }) => (open ? '0' : 'auto')};
      margin-right: ${({ open }) => (open ? '0' : '2vw')};
      width: 20px;
      height: 20px;

      &:hover {
        background-color: transparent;
        opacity: 0.5;
      }
    }
  }

  > button:hover,
  a:hover {
    background: ${({ open }) =>
      open
        ? `linear-gradient(
      90deg,
      ${theme.colors.white} 0%,
      ${theme.colors.gray_300} 15%,
      ${theme.colors.gray_300} 50%,
      ${theme.colors.gray_300} 85%,
      ${theme.colors.white} 100%
    )`
        : 'transparent'};

    font-weight: bolder;
    border: 20px 20px;
    color: ${({ open }) =>
      open ? ` ${theme.colors.white}` : `${theme.colors.blackQuantum}`};
  }
`;

import styled from 'styled-components';
import theme from '@/styles/theme';
import { motion } from 'framer-motion';
interface CircleProps {
  mouseY: number | null;
  mouseX: number | null;
  isExpanded: boolean;
}

export const Circle = styled(motion.div)<CircleProps>`
  width: ${({ isExpanded }) => (isExpanded ? '30px' : '5px')};
  height: ${({ isExpanded }) => (isExpanded ? '30px' : '5px')};
  border-radius: 50%;
  background-color: ${({ isExpanded }) =>
    isExpanded ? `${theme.colors.gray_300}` : 'transparent'};

  box-shadow: ${theme.box.shadow};
  position: fixed;
  top: ${({ mouseY, isExpanded }) =>
    isExpanded
      ? `${mouseY ? mouseY - 15 : 0}px`
      : mouseY
      ? `${mouseY - 5}px`
      : '50%'};

  left: ${({ mouseX, isExpanded }) =>
    isExpanded
      ? `${mouseX ? mouseX - 15 : 0}px`
      : mouseX
      ? `${mouseX - 5}px`
      : '50%'};

  transform: ${({ mouseX, mouseY }) =>
    mouseX && mouseY ? 'translate(-50%, -50%)' : 'none'};
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
  z-index: 9999;
`;

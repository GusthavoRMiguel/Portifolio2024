import styled from 'styled-components';
import theme from '@/styles/theme';
import { motion } from 'framer-motion';

interface CircleProps {
  mousey: number | null;
  mousex: number | null;
  isexpanded: string;
}

export const Circle = styled(motion.div)<CircleProps>`
  width: ${({ isexpanded }) => (isexpanded === 'true' ? '30px' : '5px')};
  height: ${({ isexpanded }) => (isexpanded === 'true' ? '30px' : '5px')};
  border-radius: 50%;
  background-color: ${({ isexpanded }) =>
    isexpanded === 'true' ? theme.colors.gray_300 : 'transparent'};
  box-shadow: ${theme.box.shadow};
  position: fixed;
  top: ${({ mousey, isexpanded }) =>
    isexpanded === 'true'
      ? mousey
        ? `${mousey - 15}px`
        : '0'
      : mousey
      ? `${mousey - 5}px`
      : '50%'};
  left: ${({ mousex, isexpanded }) =>
    isexpanded === 'true'
      ? mousex
        ? `${mousex - 15}px`
        : '0'
      : mousex
      ? `${mousex - 5}px`
      : '50%'};
  transform: ${({ mousex, mousey }) =>
    mousex && mousey ? 'translate(-50%, -50%)' : 'none'};
  display: ${({ isexpanded }) => (isexpanded === 'true' ? 'block' : 'none')};
  z-index: 9999;
`;

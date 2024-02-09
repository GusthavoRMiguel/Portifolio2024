import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 5vw;
  top: 0;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x: hidden;

  &.sidebar-open {
    left: 20vw;
  }
`;

export const OverlaysRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

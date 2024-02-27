import styled from 'styled-components';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  color: white;
`;

export const StyledOwl = styled(OwlCarousel)`
  .owl-nav {
    display: flex;
    width: 100%;
    position: absolute;
    top: 40%;
    justify-content: space-between;
    font-size: 3rem;
    color: black;
  }

  .owl-dots {
    text-align: center;

    .owl-dot {
      padding: 0.4rem !important;
      background-color: gray;
      border-radius: 50%;
      margin-left: 1rem;
    }

    .owl-dot.active {
      background-color: black;
    }
  }
`;

export const Content = styled.div`
  height: 60vh;
  background: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 1rem;
  color: black;

  h2 {
    place-content: center;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 90% !important;
  }
`;

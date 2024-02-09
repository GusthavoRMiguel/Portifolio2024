import React from 'react';
import { useTransform } from 'framer-motion';
import Link from 'next/link';

import { useWrapperScroll } from '../Model';

import { Container, Header, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const ano = new Date().getFullYear();

  return (
    <>
      <Container>
        <Header></Header>
      </Container>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <span>GUSTHAVO RAMOS MIGUEL</span>
          </li>
          <li>
            <span>Copyright ©</span>
          </li>
          <li>
            <span>{ano}</span>
          </li>
        </ul>
      </Footer>
    </>
  );
};

export default UniqueOverlay;

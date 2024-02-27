'use client';
import React from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

if (typeof window !== 'undefined') {
  var $ = require('jquery');
  window.$ = window.jQuery = $;
}

import { Container, Content, StyledOwl } from './styles';

interface Album {
  image: string;
  title: string;
}

interface Props {
  contentTitle: string;
  album: Album[];
}

const Carrossel = ({ contentTitle, album }: Props) => {
  const responsiveOptions = {
    0: {
      items: 1,
      margin: 5
    },
    768: {
      items: 1,
      margin: 10
    },
    1024: {
      items: 1,
      margin: 20
    }
  };

  return (
    <Container>
      <h1>{contentTitle}</h1>

      <StyledOwl
        responsive={responsiveOptions}
        loop={true}
        nav={true}
        dots={true}
      >
        {album.map((item, index) => (
          <Content key={index}>
            <h2>{item.title}</h2>
            <Image alt={item.title} src={item.image} width={400} height={300} />
          </Content>
        ))}
      </StyledOwl>
    </Container>
  );
};

export default Carrossel;

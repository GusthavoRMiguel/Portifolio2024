import React from 'react';
import Image from 'next/image';
import {
  BoxIcon,
  BoxImage,
  BoxText,
  Container,
  Content,
  Status
} from './styles';

interface CardProps {
  color: string;

  img: string;
  status: string;
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  color,
  img,
  status,
  icon,
  title,
  description
}) => {
  return (
    <Container>
      <Content>
        <BoxImage>
          <Image alt="image" src={img} width={140} height={40} />
        </BoxImage>
        <Status color={color}>{status}</Status>
        <BoxIcon>
          <Image alt="icon" src={icon} width={64} height={64} />
        </BoxIcon>
        <BoxText>
          <h1>{title}</h1>

          <h2>{description}</h2>
        </BoxText>
      </Content>
    </Container>
  );
};

export default Card;

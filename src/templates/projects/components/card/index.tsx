'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, ModalProps } from 'semantic-ui-react';
import {
  BoxIcon,
  BoxImage,
  BoxText,
  Container,
  Content,
  FlippedContent,
  Status,
  StyledModal
} from './styles';
import Carrossel from '../carrossel';

interface ScreenShot {
  pc?: {
    title: string;
    image: string;
  }[];
  tablet?: {
    title: string;
    image: string;
  }[];
  smartphone?: {
    title: string;
    image: string;
  }[];
}
interface CardProps {
  link?: string;
  linkGithub?: string;
  info?: string;
  screenShots?: ScreenShot;
  img: string;
  status: 'Em Desenvolvimento' | 'Online' | 'Pausado';
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  link,
  linkGithub,
  info,
  screenShots,
  img,
  status,
  icon,
  title,
  description
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [screenShotsModalOpen, setScreenShotsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleInfoModalOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setInfoModalOpen(!infoModalOpen);
  };

  const handleScreenShotsModalOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setScreenShotsModalOpen(!screenShotsModalOpen);
  };

  const handleInfoModalClose = (
    event: React.MouseEvent<HTMLElement>,
    _: ModalProps
  ) => {
    event.stopPropagation();
    setInfoModalOpen(false);
  };

  const handleScreenShotsModalClose = (
    event: React.MouseEvent<HTMLElement>,
    _: ModalProps
  ) => {
    event.stopPropagation();
    setScreenShotsModalOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <Container onClick={handleCardClick} isFlipped={isFlipped}>
      {isFlipped ? (
        <Content>
          <FlippedContent isFlipped={isFlipped}>
            {link ? (
              <a
                href={link !== '' ? link : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link do projeto
              </a>
            ) : (
              <p>Link do Projeto Indisponível</p>
            )}

            {linkGithub ? (
              <a
                href={linkGithub !== '' ? linkGithub : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositório no Github
              </a>
            ) : (
              <p>Repositório Privado ou Indisponível</p>
            )}
            {info ? (
              <button onClick={handleInfoModalOpen}>
                Ver informações sobre o projeto
              </button>
            ) : (
              <p>Informações sobre o projeto indisponíveis</p>
            )}
            {screenShots ? (
              <button onClick={handleScreenShotsModalOpen}>
                Ver capturas de tela do projeto
              </button>
            ) : (
              <p>Capturas de tela do projeto indisponíveis</p>
            )}
          </FlippedContent>
        </Content>
      ) : (
        <Content>
          <BoxImage>
            <Image alt="image" src={img} width={140} height={40} />
          </BoxImage>
          <Status
            color={
              status === 'Em Desenvolvimento'
                ? '#facc15'
                : status === 'Online'
                ? '#10b981'
                : '#FF0000 '
            }
          >
            {status}
          </Status>
          <BoxIcon>
            <Image alt="icon" src={icon} width={64} height={64} />
          </BoxIcon>
          <BoxText>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </BoxText>
        </Content>
      )}

      {infoModalOpen && (
        <StyledModal open={infoModalOpen} onClose={handleInfoModalClose}>
          <StyledModal.Header>Informações do Projeto</StyledModal.Header>
          <StyledModal.Content> {info}</StyledModal.Content>

          <StyledModal.Actions>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleInfoModalClose(event, {})
              }
              negative
            >
              Fechar
            </Button>
          </StyledModal.Actions>
        </StyledModal>
      )}
      {screenShotsModalOpen && (
        <StyledModal
          open={screenShotsModalOpen}
          onClose={handleScreenShotsModalClose}
          onClick={handleModalClick}
        >
          <StyledModal.Header>Capturas de tela do Projeto</StyledModal.Header>
          <StyledModal.Content scrolling>
            {screenShots && (
              <>
                {screenShots.pc && (
                  <Carrossel contentTitle="PC" album={screenShots.pc} />
                )}
                {screenShots.tablet && (
                  <Carrossel contentTitle="Tablet" album={screenShots.tablet} />
                )}
                {screenShots.smartphone && (
                  <Carrossel
                    contentTitle="Smartphone"
                    album={screenShots.smartphone}
                  />
                )}
              </>
            )}
          </StyledModal.Content>

          <StyledModal.Actions>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleScreenShotsModalClose(event, {})
              }
              negative
            >
              Fechar
            </Button>
          </StyledModal.Actions>
        </StyledModal>
      )}
    </Container>
  );
};

export default Card;

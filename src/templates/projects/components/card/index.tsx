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
  ImageModal,
  Status,
  StyledModal
} from './styles';

interface ScreenShot {
  imgTitle: string;
  imgSrc: string;
}

interface CardProps {
  link?: string;
  linkGithub?: string;
  info?: string;
  screenShots?: ScreenShot[];
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
              <p>Repositório Privado</p>
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
        >
          <StyledModal.Header>Capturas de tela do Projeto</StyledModal.Header>
          <StyledModal.Content scrolling className="gridImage">
            {screenShots?.map((shot, index) => (
              <ImageModal key={index}>
                <h3>{shot.imgTitle}</h3>
                <Image
                  alt={shot.imgTitle}
                  src={shot.imgSrc}
                  width={400}
                  height={300}
                />
              </ImageModal>
            ))}
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

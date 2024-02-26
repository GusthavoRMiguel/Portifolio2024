import {
  Container,
  Content,
  Description,
  Dot,
  Heading,
  HeadingText,
  Local,
  Title
} from './styles';

interface TimelineProps {
  ano: string;
  title: string;
  type: string;
  local: string;
  description: string;
}
function Timeline(props: TimelineProps) {
  return (
    <Container>
      <Heading>
        <Dot />
        <HeadingText>{props.ano}</HeadingText>
      </Heading>
      <Content>
        <Title>
          {props.title} ({props.type})
        </Title>
        <Local>{props.local}</Local>
        <Description>{props.description}</Description>
      </Content>
    </Container>
  );
}

export default Timeline;

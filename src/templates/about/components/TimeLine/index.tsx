import {
  TimelineContainer,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineText,
  TimelineTitle
} from './styles';

interface TimelineProps {
  ano: string;
  title: string;
  description: string;
}
function Timeline(props: TimelineProps) {
  return (
    <TimelineItem>
      <TimelineContainer>
        <TimelineDot />
        <TimelineText>{props.ano}</TimelineText>
      </TimelineContainer>
      <div>
        <TimelineTitle>{props.title}</TimelineTitle>
        <TimelineDescription>{props.description}</TimelineDescription>
      </div>
    </TimelineItem>
  );
}

export default Timeline;

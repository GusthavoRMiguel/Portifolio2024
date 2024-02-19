import styled from 'styled-components';

export const TimelineItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const TimelineDot = styled.div`
  background-color: #4f46e5;
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.5rem;
`;

export const TimelineText = styled.div`
  flex: 1;
  margin-left: 1rem;
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const TimelineTitle = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-left: 1.5rem;
`;

export const TimelineDescription = styled.div`
  margin-left: 3rem;
  margin-top: 0.5rem;
  font-size: 1rem;
`;

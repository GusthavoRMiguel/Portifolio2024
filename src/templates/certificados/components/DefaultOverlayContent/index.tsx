import React from 'react';

import { Container, Heading, Content, List } from './styles';

interface ListItems {
  title: string;
  text: string;
}

interface Props {
  pageName?: React.ReactNode;

  listItems: ListItems[];
}

const DefaultOverlayContent: React.FC<Props> = ({
  pageName,

  listItems
}) => {
  return (
    <Container>
      <Heading>{pageName}</Heading>

      <Content>{listItems && listItems.length > 0 && <List></List>}</Content>
    </Container>
  );
};

export default DefaultOverlayContent;

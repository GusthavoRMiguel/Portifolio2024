import React from 'react';

import { Container, Heading, Content, List } from './styles';

interface Props {
  pageName?: React.ReactNode;
  listItems: React.ReactNode[]; // Modificando para array de elementos ReactNode
}

const DefaultOverlayContent: React.FC<Props> = ({ pageName, listItems }) => {
  return (
    <Container>
      <Heading>{pageName}</Heading>

      <Content>
        {listItems && listItems.length > 0 && <List>{listItems}</List>}
      </Content>
    </Container>
  );
};

export default DefaultOverlayContent;

import React from 'react';

import { PageContainer, PageTitle, BorderLine } from './styles';

interface PageNameProps {
  page: string;
}

const PageName: React.FC<PageNameProps> = ({ page }) => {
  return (
    <PageContainer>
      <div>
        <PageTitle>{page}</PageTitle>
        <BorderLine width="6rem" />
        <BorderLine width="3rem" />
      </div>
    </PageContainer>
  );
};

export default PageName;

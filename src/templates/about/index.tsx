'use client';
import React, { useState } from 'react';
import ModelsWrapper from './components/Model/ModelsWrapper';
import ModelSection from './components/Model/ModelSection';
import DefaultOverlayContent from './components/DefaultOverlayContent';
import UniqueOverlay from './components/UniqueOverlay';
import { Container, Spacer } from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const AboutPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const detectLanguage = () => {
    if (typeof window !== 'undefined') {
      const userLanguages = navigator.languages || [navigator.language];
      const primaryLanguage = userLanguages[0].startsWith('pt') ? 'pt' : 'en';
      return primaryLanguage;
    }

    return 'en';
  };

  const translate = (key: string, translations: Translations) => {
    const language = detectLanguage();
    return translations[key][language] || key;
  };

  const translatesOptions = {
    About: {
      pt: 'Sobre',
      en: 'About'
    }
  };

  const modelData = [
    {
      id: 0,
      pageName: <PageName page={translate('About', translatesOptions)} />,
      modelName: '',
      items: []
    }
  ];

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
      <ModelsWrapper sideBarOpen={isSidebarOpen}>
        <div>
          {modelData.map(({ id, modelName, pageName, items }) => (
            <ModelSection
              key={id}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent pageName={pageName} listItems={items} />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default AboutPage;

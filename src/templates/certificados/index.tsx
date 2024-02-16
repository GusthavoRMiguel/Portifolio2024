'use client';
import React, { useState } from 'react';
import ModelsWrapper from './components/Model/ModelsWrapper';
import ModelSection from './components/Model/ModelSection';
import DefaultOverlayContent from './components/DefaultOverlayContent';
import UniqueOverlay from './components/UniqueOverlay';
import { Container, Content, Spacer } from './styles';
import Sidebar from '@/components/sideBar';
import PageName from '@/components/pageName';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const CertificatesPage: React.FC = () => {
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
    // Trate o caso em que navigator não está disponível, por exemplo, retornando uma linguagem padrão.
    return 'en';
  };

  const translate = (key: string, translations: Translations) => {
    const language = detectLanguage();
    return translations[key][language] || key;
  };

  const translatesOptions = {
    Certificates: {
      pt: 'Certificados',
      en: 'Certificates'
    }
  };

  const modelData = [
    {
      id: 0,
      pageName: (
        <PageName page={translate('Certificates', translatesOptions)} />
      ),
      modelName: '',
      items: []
    }
  ];

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onOpen={handleSidebarOpen} />
      <ModelsWrapper sideBarOpen={isSidebarOpen}>
        <Content>
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
        </Content>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default CertificatesPage;

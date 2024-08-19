import React from 'react';
import ResearchWork from '../components/research-work';
import Music from '../components/Music';
import Art from '../components/Art';
import Others from '../components/Others';

interface MainContentProps {
  activeTab: number;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const renderTabContent = (index: number) => {
    switch (index) {
      case 0:
        return <ResearchWork />;
      case 1:
        return <Music />;
      case 2:
        return <Art />;
      case 3:
        return <Others />;
      default:
        return null;
    }
  };

  return <div>{renderTabContent(activeTab)}</div>;
};

export default MainContent;

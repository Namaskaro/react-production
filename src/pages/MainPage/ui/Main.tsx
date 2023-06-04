import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const Main = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Главная страница')}
      <PageLoader />
    </div>
  );
};

export default Main;

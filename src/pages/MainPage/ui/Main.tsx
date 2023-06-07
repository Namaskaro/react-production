import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('Главная страница')}
      <Counter />
    </>
  );
};

export default Main;

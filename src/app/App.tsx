import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { AboutAsync } from 'pages/AboutPage/ui/AboutAsync';
import { MainAsync } from 'pages/MainPage/ui/MainAsync';
import './styles/index.scss';

import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import About from 'pages/AboutPage/ui/About';
import Main from 'pages/MainPage/ui/Main';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import png from 'shared/assets/icons/user-32-32.png';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div>
      <button onClick={toggle}>{t('Перевод')}</button>
      {t('Тестовый пример')}
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

import React, { Suspense } from 'react';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import { Link } from 'react-router-dom';
import { AboutAsync } from './pages/AboutAsync';
import { MainAsync } from './pages/MainAsync';
import './styles/index.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <button onClick={toggleTheme}>Переключить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutAsync />} />
          <Route path={'/'} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

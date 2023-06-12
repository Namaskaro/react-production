import React, { Suspense } from 'react';

import { classNames } from '../shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

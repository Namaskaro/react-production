import React, { memo } from 'react';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/selectLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername/loginByUsername';
import { TextTheme, Text } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}
export const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangeUserPassword = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = React.useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        placeholder={t('Имя')}
        className={cls.input}
        type="text"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Пароль')}
        className={cls.input}
        type="text"
        onChange={onChangeUserPassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ThemeButton.LOGIN}
        onClick={onLoginClick}
        disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
});

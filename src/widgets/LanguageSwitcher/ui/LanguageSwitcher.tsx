import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  short,
}: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};

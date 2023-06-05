import React from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import LeftIcon from 'shared/assets/icons/left.svg';
import RightIcon from 'shared/assets/icons/right.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        size={ButtonSize.XL}
        square>
        {collapsed ? <RightIcon /> : <LeftIcon />}
      </Button>
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>
          {collapsed ? <HomeIcon /> : t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>
          {collapsed ? <AboutIcon /> : t('О нас')}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};

import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState(false);
  const onToggleModal = React.useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ThemeButton.OUTLINE}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium sunt
        repellendus amet architecto eius nemo assumenda id praesentium doloremque!
      </Modal>
    </div>
  );
};

import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('loadingio-spinner-rolling-xnscoj49r5', {}, [className])}>
      <div className="ldio-ckberkd7xw4">
        <div></div>
      </div>
    </div>
  );
};

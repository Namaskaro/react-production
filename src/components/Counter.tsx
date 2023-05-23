import React from 'react';
import classes from './Counter.module.scss';

export const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span className={classes.counter}>{count}</span>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};

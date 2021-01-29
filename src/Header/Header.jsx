import React from 'react';
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.geometricFigures}>
        <div className={classes.circle}></div>
        <div className={classes.rectangle}></div>
        <div className={classes.circle}></div>
        <div className={classes.parallelogram}></div>
      </div>

    </div>
  );
};

export default Header;
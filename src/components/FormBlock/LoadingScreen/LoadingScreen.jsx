import React from 'react';
import classes from './LoadingScreen.module.scss'

const LoadingScreen = () => {
  return (
    <div className={classes.loadingScreen}>
      <h2>Сообщение поставлено в очередь на отправку</h2>
      <span>Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты получателя «abc@my.com» со скоростью электронов.</span>
    </div>
  );
};

export default LoadingScreen;
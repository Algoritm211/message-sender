import React from 'react';
import classes from "./TableRow.module.scss";
import classNames from 'classnames'
import {stringCutter} from "../../../utils/stringCutter";

const TableRow = (props) => {

  let statusColor
  let statusText

  if (props.message.status === 'pending') {
    statusColor = '#666464'
    statusText = 'В очереди'
  } else if (props.message.status === 'completed') {
    statusColor = '#03A100'
    statusText = 'Отправлено'
  }


  return (
    <div className={classNames(classes.tableRow, {[classes.main]: props.main})}>
      <div className={classes.cell}>
        {props.message.date}
      </div>
      <div className={classNames(classes.cell, classes.themeCell)}>
        {stringCutter(props.message.emailTopic, 45)}
      </div>
      <div className={classes.cell} style={{color: statusColor}}>
        {statusText || 'Статус'}
      </div>
    </div>
  );
};

export default TableRow;




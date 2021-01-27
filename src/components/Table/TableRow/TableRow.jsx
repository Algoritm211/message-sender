import React from 'react';
import classes from "./TableRow.module.scss";
import classNames from 'classnames'

const TableRow = (props) => {

  return (
    <div className={classNames(classes.tableRow, {[classes.main]: props.main})}>
      <div className={classes.cell}>
        30 сентября
      </div>
      <div className={classNames(classes.cell, classes.themeCell)}>
        {stringCutter('Здесь будет просто огромная тема, которую нужно было бы обрезать на самом деле')}
      </div>
      <div className={classes.cell}>
        Статус
      </div>
    </div>
  );
};

export default TableRow;


function stringCutter (str) {
  const size = 47

  if (str.length > size) {
    return str.slice(0, size) + '...'
  }
  return str
}



import React from 'react'
import classes from './Table.module.scss'
import TableRow from "./TableRow/TableRow";

const Table = () => {
  return (
    <div className={classes.table}>
      <h3>Отправленные сообщения</h3>
      <TableRow main={true}/>
      <TableRow />
    </div>
  );
};

export default Table;
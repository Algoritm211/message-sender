import React from 'react'
import classes from './Table.module.scss'
import TableRow from "./TableRow/TableRow";
import {useSelector} from "react-redux";
import {getMessages} from "../../redux/sendForm-selector";

const Table = () => {
  const messages = useSelector(getMessages)

  const tableRowsBlock = messages.map(message => {
    return (
      <TableRow message={message} key={message.id}/>
    )
  })


  const headerState = {date: 'Дата', emailTopic: 'Тема', status: 'Статус'}
  return (
    <div className={classes.table}>
      <h3>Отправленные сообщения</h3>
      {messages.length === 0
        ? <span>Сообщения еще не отправлялись</span>

        : <React.Fragment>
          <TableRow main={true} message={headerState}/>
          {tableRowsBlock}
        </React.Fragment>
      }

    </div>
  );
}
;

export default Table;
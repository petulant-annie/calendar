import * as React from 'react';

import store from '../../store';
import { TIMESTAMP } from '../../constants';
import Modal from '../popup/popup';
import './style/calendar.sass';

export default class CalendarContent extends React.Component {
  constructor(props: any) {
    super(props);

  }

  render() {
    const taskList = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        return (
          <tr
            key={value[0]}
            className="cell"
            data-toggle="modal"
            data-target="#taskModalCenter"
          >
            <td>{value[1]}</td>
            <td />
          </tr>
        );
      })
    );

    return (
      <div>
        <table className="calendar">
          <tbody>
            {taskList}
          </tbody>
        </table>
        <Modal />
      </div>
    );
  }
}

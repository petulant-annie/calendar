import * as React from 'react';

import './style/popup.sass';

export default class Popup extends React.Component {

  handleTimeMatch() {
    const timeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const timeMatch: RegExpMatchArray =
      e.target.value.match(/^([8-9]|1[0-7]):[0-5][0-9]$/ig);
      if (timeMatch) {
        console.log('done');
      } else console.log('error');
    };

    return timeMask;
  }

  render() {

    return (
      <div className="calendar-prompt">
        <div className="start-time">
          <input type="text" placeholder="00:00" onBlur={this.handleTimeMatch()} />
        </div>
        <div className="duration-time">
          <input type="text" />
        </div>
        <div className="calendar-task">
          <textarea className="task-text" maxLength={50} />
        </div>
        <button
          id="calendarOk"
          className="calendar-ok"
          type="button"
        >OK
        </button>
        <button
          id="calendarCancel"
          className="calendar-cancel"
          type="button"
        >Cancel
        </button>
        <button
          id="calendarRemove"
          className="calendar-remove"
          type="button"
        >Remove
        </button>
      </div>
    );
  }
}

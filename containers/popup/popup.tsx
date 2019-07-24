import * as React from 'react';

import './style/popup.sass';

export default class Popup extends React.Component {

  render() {

    return (
      <div className="calendar-prompt">
        <div className="start-time">
          <label>Enter start time:
          <input
              id="startTime"
              min="8:00"
              max="17:00"
              required={true}
              placeholder="HH:MM"
              maxLength={5}
              type="time"
            // onBlur={sliceTime}
            // onChange={this.handleTimeMatch()}
            />
          </label>
        </div>
        <div className="duration-time">
          <label>Enter duaration:
          <input type="text" />
          </label>
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

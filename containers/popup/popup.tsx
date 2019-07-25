import * as React from 'react';

import './style/popup.sass';

interface IPopupDisplay {
  popupClassName: string;
}

export default class Popup extends React.Component<IPopupDisplay> {

  render() {
    const { popupClassName } = this.props;
    const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      console.log(value);
      const enteredHours = value.slice(0, 2);
      const enteredMin = value.slice(-2);

      return inputValue;
    };

    const popup = (
      <div className={popupClassName}>
        <form action="">
          <div className="start-time">
            <label>Enter start time:
          <input
                id="startTime"
                min="08:00"
                max="17:00"
                required={true}
                maxLength={5}
                type="time"
                onChange={inputValue}
              />
            </label>
          </div>
          <div className="duration-time">
            <label>Enter duaration:
          <input
                type="number"
                placeholder="min"
                min={0}
                max={540}
              />
            </label>
          </div>
          <div className="calendar-task">
            <textarea
              required={true}
              className="task-text"
              maxLength={50}
            />
          </div>
          <button
            id="calendarOk"
            className="calendar-ok"
            type="submit"
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
        </form>
      </div>
    );

    return (
      <div>
        {popup}
      </div>
    );
  }
}

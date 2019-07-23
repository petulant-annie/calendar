import * as React from 'react';

import './style/popup.sass';

export default class Popup extends React.Component {
  state: { timeValid: boolean };
  constructor() {
    super();
    this.state = {
      timeValid: false,
    };
  }

  handleTimeMatch() {
    const timeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const timeMatch: RegExpMatchArray =
        e.target.value.match(/^([8-9]|1[0-7])\:?([0-5][0-9])$/ig);
      if (timeMatch) {
        this.setState({ timeValid: true });
        console.log(this.state.timeValid);
      } else this.setState({ timeValid: false });
      console.log(this.state.timeValid);
    };

    return timeMask;
  }

  render() {
    const sliceTime = (e: React.ChangeEvent<HTMLInputElement>) => {
      const enteredTime = e.target.value.split('', 4);
      if (this.state.timeValid) {
        if (enteredTime[0] !== '8' || enteredTime[0] !== '9') {
          const matrix = 'HH:MM';
          const matrixReplace = matrix.replace(/\D/g, ':');
          const value = e.target.value.replace(/\D/g, ':');

          console.log();
        }
      }
      // window.addEventListener("DOMContentLoaded", function() {
      // function setCursorPosition(pos, elem) {
      //   elem.focus();
      //    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      //    else if (elem.createTextRange) {
      //    var range = elem.createTextRange();
      //    range.collapse(true);
      //    range.moveEnd("character", pos);
      //   range.moveStart("character", pos);
      //   range.select()
      //       }
      //   }

      //   function mask(event) {
      //   var matrix = "+7 (___) ___ ____",
      //    i = 0,
      //    def = matrix.replace(/\D/g, ""),
      //    val = this.value.replace(/\D/g, "");
      //   if (def.length >= val.length) val = def;
      //   this.value = matrix.replace(/./g, function(a) {
      //     return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      //   });
      //   if (event.type == "blur") {
      //    if (this.value.length == 2) this.value = ""
      //    } else setCursorPosition(this.value.length, this)

      //   };
      //    var input = document.querySelector("#tel");
      //    input.addEventListener("input", mask, false);
      //    input.addEventListener("focus", mask, false);
      //     input.addEventListener("blur", mask, false);
      //   });

      // return sliceTime;
    };

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

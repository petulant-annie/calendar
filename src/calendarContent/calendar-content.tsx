import * as React from 'react';

import './style/calendar.sass';

export default class CalendarContent extends React.Component {
  render() {
    const taskList = (
      <table
        className="calendar"
        data-toggle="modal"
        data-target="#taskModalCenter"
      >
        <tbody>
          <tr className="cell">
            <td>8:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>8:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>9:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>9:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>10:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>11:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>11:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>12:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>12:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>13:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>13:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>14:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>14:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>15:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>15:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>16:00</td>
            <td />
          </tr>
          <tr className="cell">
            <td>16:30</td>
            <td />
          </tr>
          <tr className="cell">
            <td>17:00</td>
            <td />
          </tr>
        </tbody>
      </table>
    );

    const modal = (
      <div
        className="modal fade"
        id="taskModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="taskModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskModalLongTitle">Add task</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label>Enter start time:
              <input
                  type="time"
                  id="startTime"
                  min="08:00"
                  max="17:00"
                  required={true}
                  maxLength={5}
              />
              </label>
              <label>Enter duaration:
                <input
                  type="number"
                  placeholder="min"
                  min={0}
                  max={540}
                />
              </label>
              <textarea
                className="form-control"
                id="taskInput"
                rows={3}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
              >Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {taskList}
        {modal}
      </div>
    );
  }
}

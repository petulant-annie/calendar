import * as React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
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
                  min={15}
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
  }
}
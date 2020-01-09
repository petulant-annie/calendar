import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TIMESTAMP } from '../../constants';
import { IInitialState } from '../../interfaces';
import { addTask, getTasks, errorAction } from '../../actions/taskActions';

interface IModal {
  user: string;
  addTask: (data: { user: string, start: string, duration: number, title: string }) => void;
  getTasks: (user: string) => void;
  errorAction: (error: boolean) => void;
}

class Modal extends React.Component<IModal> {
  selectStart: HTMLSelectElement;
  selectEnd: HTMLSelectElement;
  state: {
    start: string;
    startDuration: number;
    end: string;
    endDuration: number;
    title: string;
  };

  constructor(props: IModal) {
    super(props);
    this.state = {
      start: '',
      startDuration: 0,
      end: '',
      endDuration: 0,
      title: '',
    };
  }

  handleSelectStart = (e: React.ChangeEvent) => {
    e.preventDefault();
    Object.entries(TIMESTAMP).find((elem) => {
      if (this.selectStart.value === elem[0]) {
        this.setState({ start: elem[1], startDuration: elem[0] });
      }
    });
  }

  handleSelectEnd = (e: React.ChangeEvent) => {
    e.preventDefault();
    Object.entries(TIMESTAMP).find((elem) => {
      if (this.selectEnd.value === elem[0]) {
        this.setState({ end: elem[1], endDuration: elem[0] });
      }
    });
  }

  handleTitleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;
    this.setState({ title: target.value });
  }

  handleSaveTask = async () => {
    if (this.props.user && this.props.user.length > 0) {
      const duration = this.state.endDuration - this.state.startDuration;
      const data = {
        duration,
        user: this.props.user,
        start: this.state.start,
        title: this.state.title,
      };
      if (duration > 0 && this.state.title !== '') {
        await this.props.addTask(data);
        await this.props.getTasks(this.props.user);
      } else {
        this.props.errorAction(true);
      }
    }
  }

  render() {
    const timeSelect = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        return (
          <option
            key={value[0]}
            value={value[0]}
          >
            {value[1]}
          </option>
        );
      })
    );

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
              <div className="form-group time-select">
                <select
                  className="custom-select start-time-select-item"
                  required={true}
                  ref={select => this.selectStart = select}
                  onChange={this.handleSelectStart}
                >
                  <option value="">Start</option>
                  {timeSelect}
                </select>
                <select
                  className="custom-select"
                  required={true}
                  ref={select => this.selectEnd = select}
                  onChange={this.handleSelectEnd}
                >
                  <option value="">End</option>
                  {timeSelect}
                </select>
              </div>
              <textarea
                className="form-control"
                id="taskInput"
                rows={3}
                onChange={this.handleTitleChange}
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
                data-dismiss="modal"
                onClick={this.handleSaveTask}
              >Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { addTask, getTasks, errorAction },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TIMESTAMP } from '../../constants';
import Modal from '../popup/popup';
import { IInitialState, ITasksObject } from '../../interfaces';
import { getTasks, deleteTaskAction } from '../../actions/taskActions';

import './style/calendar.sass';

interface ICalendarContent<IInitialState> {
  tasks: ITasksObject[];
  user: string;
  getTasks: (user: string) => void;
  deleteTaskAction: (id: string, user: string) => void;
}

class CalendarContent extends React.Component<ICalendarContent<IInitialState>> {
  state: { currentTask: string };
  constructor(props: ICalendarContent<IInitialState>) {
    super(props);
    this.state = {
      currentTask: '',
    };
  }

  handleCurrentTask(currentTask: string) {
    this.setState({ currentTask });
  }

  handleDeleteTask = async () => {
    await this.props.deleteTaskAction(this.state.currentTask, this.props.user);
    await this.props.getTasks(this.props.user);
    this.setState({ currentTask: '' });
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user && user.length > 0) {
      this.props.getTasks(user);
    }
  }

  componentDidUpdate(prevProps: ICalendarContent<IInitialState>) {
    if (this.props.user !== prevProps.user &&
      this.props.user) {
      this.props.getTasks(this.props.user);
    }
  }

  render() {
    const taskList = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        const currentUserTasks = this.props.tasks.map((item, index) => {
          if (value[1] === item.start) {
            return (
              <td
                key={index}
                rowSpan={item.duration / 15}
                className="task-col-item"
                data-toggle="modal"
                data-target="#deleteModal"
                onClick={this.handleCurrentTask.bind(this, item._id)}
              >
                {item.title}
              </td>
            );
          }
        });

        return (
          <tr
            key={value[0]}
            className="calendar-row"
          >
            <td className="time-col">
              {value[1]}
            </td>
            {currentUserTasks}
          </tr>
        );
      })
    );

    return (
      <div>
        <table className="calendar">
          <tbody className="calendar-table">
            {taskList}
          </tbody>
        </table>
        <Modal />
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Task?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.handleDeleteTask}
                >Delete
                </button>
              </div>
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
    { getTasks, deleteTaskAction },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContent);

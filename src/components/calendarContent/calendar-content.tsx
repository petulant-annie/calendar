import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TIMESTAMP } from '../../constants';
import Modal from '../popup/popup';
import { IInitialState, ITasksObject } from '../../interfaces';
import { getTasks } from '../../actions/taskActions';

import './style/calendar.sass';

interface ICalendarContent<IInitialState> {
  tasks: ITasksObject[];
  user: string;
  getTasks: (user: string) => void;
}

class CalendarContent extends React.Component<ICalendarContent<IInitialState>> {
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
                className="task-content-item"
              >
                {item.title}
              </td>
            );
          }
        });

        return (
          <tr
            key={value[0]}
            className="cell"
          >
            <td
              className="task-time"
              data-toggle="modal"
              data-target="#taskModalCenter"
            >{value[1]}
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
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { getTasks },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContent);

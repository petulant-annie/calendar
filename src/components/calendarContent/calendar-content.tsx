import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IInitialState, ITasksObject } from '../../interfaces';
import { TIMESTAMP } from '../../constants';
import Modal from '../popup/popup';
import { getTasks } from '../../actions/taskActions';
import './style/calendar.sass';

interface ICalendarContent<IInitialState> {
  tasks: ITasksObject[];
  getTasks: (user: string) => void;
}

class CalendarContent extends React.Component<ICalendarContent<IInitialState>> {
  componentDidMount() {
    const user = localStorage.getItem('user');
    this.props.getTasks(user);
  }

  render() {
    const taskList = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        const currentUserTasks = this.props.tasks.map((item, index) => {
          if (value[1] === item.start) {
            return (
              <div key={index}>
                {item.title}
              </div>
            );
          }
        });

        return (
          <tr
            key={value[0]}
            className="cell"
            data-toggle="modal"
            data-target="#taskModalCenter"
          >
            <td>{value[1]}</td>
            <td>{currentUserTasks}</td>
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


const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { getTasks },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContent);

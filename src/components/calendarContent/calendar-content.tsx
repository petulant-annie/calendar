import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Confirm } from 'semantic-ui-react';

import { TIMESTAMP } from '../../constants';
import { IInitialState, ITasksObject } from '../../interfaces';
import { getTasks, deleteTaskAction } from '../../actions/taskActions';

import './style/calendar.sass';

interface ICalendarContent {
  tasks: ITasksObject[];
  user: string;
  getTasks: (user: string) => void;
  deleteTaskAction: (id: string, user: string) => void;
}

class CalendarContent extends React.Component<ICalendarContent> {
  state: { currentTask: string, deleteTask: boolean };
  constructor(props: ICalendarContent) {
    super(props);
    this.state = { currentTask: '', deleteTask: false };
  }

  handleCancelModal = () => this.setState({ deleteTask: false });

  handleCurrentTask(currentTask: string) {
    this.setState({ currentTask, deleteTask: true });
  }

  handleDeleteTask = async () => {
    await this.props.deleteTaskAction(this.state.currentTask, this.props.user);
    await this.props.getTasks(this.props.user);
    this.setState({ currentTask: '', deleteTask: false });
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user && user.length > 0) {
      this.props.getTasks(user);
    }
  }

  componentDidUpdate(prevProps: ICalendarContent) {
    if (this.props.user !== prevProps.user &&
      this.props.user) {
      this.props.getTasks(this.props.user);
    }
  }

  render() {
    const { deleteTask } = this.state;

    const taskList = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        const currentUserTasks = this.props.tasks.map((item, index) => {
          if (value[1] === item.start) {
            return (
              <td
                key={index}
                rowSpan={item.duration / 15}
                className="task-col-item"
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
        <Confirm
          header="Delete Task?"
          content="Do you want to delete current task?"
          open={deleteTask}
          onCancel={this.handleCancelModal}
          onConfirm={this.handleDeleteTask}
        />
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

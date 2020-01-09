import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import CalendarContent from '../../components/calendarContent/calendar-content';
import LoginPopup from '../../components/login/loginPopup';
import { IInitialState } from '../../interfaces';
import { setUser, logout, errorAction } from '../../actions/taskActions';

import './style/main.sass';

interface IMain<IInitialState> {
  setUser: (user: string) => void;
  errorAction: (error: boolean) => void;
  logout: () => void;
  user: string;
  tasks: {};
  error: boolean;
}

class Main extends React.Component<IMain<IInitialState>> {
  state: { isUser: boolean };
  constructor(props: IMain<IInitialState>) {
    super(props);
    this.state = { isUser: false };
  }

  handleLogOut = () => {
    localStorage.clear();
    this.props.logout();
    this.setState({ isUser: false });
  }

  handleToastClose = () => {
    this.props.errorAction(false);
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user && user.length > 0) {
      this.props.setUser(user);
      this.setState({ isUser: true });
    } else {
      this.props.setUser('');
      this.setState({ isUser: false });
    }
  }

  componentDidUpdate(prevProps: IMain<IInitialState>) {
    if (this.props.user !== prevProps.user && this.props.user.length > 0) {
      this.setState({ isUser: true });
    }
  }

  render() {
    const toaster = (
      this.props.error ?
        (
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-autohide="false"
          >
            <div className="toast-header">
              <strong className="mr-auto error-toast">
                Start time must be earlier than the end, <br /> task cannot be empty
                </strong>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                onClick={this.handleToastClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ) :
        ''
    );

    const dataStr = JSON.stringify(this.props.tasks);
    const dataUri =
      `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;

    return (
      <div className="main-content">
        {toaster}
        <div className="buttons-container">
          <button
            type="button"
            className="btn btn-primary header-btn"
            data-toggle="modal"
            data-target="#taskModalCenter"
          >
            Add Task
          </button>
          <button
            type="button"
            className={!this.state.isUser ? 'btn btn-primary header-btn' : 'hide'}
            data-toggle="modal"
            data-target="#loginPopup"
          >
            Login
          </button>
          <button
            type="button"
            className={this.state.isUser ? 'btn btn-secondary header-btn' : 'hide'}
            onClick={this.handleLogOut}
          >
            Logout
          </button>
          <a href={dataUri} download="data.json" className="stretched-link">Download schedule</a>
        </div>
        <CalendarContent />
        <LoginPopup />
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { setUser, logout, errorAction },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

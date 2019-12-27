import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import CalendarContent from '../../components/calendarContent/calendar-content';
import LoginPopup from '../../components/login/loginPopup';
import { IInitialState } from '../../interfaces';
import { setUser, logout } from '../../actions/taskActions';

import './style/main.sass';

interface IMain<IInitialState> {
  setUser: (user: string) => void;
  logout: () => void;
  user: string;
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
    return (
      <div className="main-content">
        <div className="login-container">
          <button
            type="button"
            className={!this.state.isUser ? 'btn btn-primary' : 'hide'}
            data-toggle="modal"
            data-target="#loginPopup"
          >
            Login
          </button>
          <button
            type="button"
            className={this.state.isUser ? 'btn btn-secondary' : 'hide'}
            onClick={this.handleLogOut}
          >
            Logout
          </button>
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
    { setUser, logout },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

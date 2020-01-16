import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import AddTaskModal from '../../components/popup/popup';
import CalendarContent from '../../components/calendarContent/calendar-content';
import LoginPopup from '../../components/login/loginPopup';
import { IInitialState } from '../../interfaces';
import { setUser, logout } from '../../actions/taskActions';

import './style/main.sass';

interface IMain {
  setUser: (user: string) => void;
  logout: () => void;
  user: string;
  tasks: {};
}

class Main extends React.Component<IMain> {
  state: { isUser: boolean };
  constructor(props: IMain) {
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

  componentDidUpdate(prevProps: IMain) {
    if (this.props.user !== prevProps.user && this.props.user.length > 0) {
      this.setState({ isUser: true });
    }
  }

  render() {
    const { isUser } = this.state;
    const dataStr = this.props.tasks ? JSON.stringify(this.props.tasks) : 'Error';
    const dataUri = `data:application/json;charset=utf-8,${dataStr}`;

    const logoutBtn = (
      <Button
        onClick={this.handleLogOut}
        color="red"
        basic={true}
      >Logout
      </Button>
    );

    return (
      <div className="main-content">
        <div className="buttons-container">
          {isUser ? <AddTaskModal /> : ''}
          {isUser ? logoutBtn : <LoginPopup />}
          {isUser ? <a href={dataUri} download="data.json">Download schedule</a> : ''}
        </div>
        <CalendarContent />
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

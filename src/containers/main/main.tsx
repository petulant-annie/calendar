import * as React from 'react';

import CalendarContent from '../../components/calendarContent/calendar-content';
import LoginPopup from '../../components/login/loginPopup';
import { IInitialState } from '../../interfaces';

import './style/main.sass';

class Main extends React.Component<IInitialState> {
  render() {
    return (
      <div className="main-content">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#loginPopup"
        >
          Login
        </button>
        <CalendarContent />
        <LoginPopup />
      </div>
    );
  }
}

export default Main;

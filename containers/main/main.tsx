import * as React from 'react';

import CalendarContent from '../../components/calendarContent/calendar-content';
import Popup from '../popup/popup';

import './style/main.sass';

interface IMainState {
  state: {
    showPopup: boolean,
  };
}

export default class Main extends React.Component<IMainState> {
  state: {
    showPopup: boolean,
  };
  constructor(props: any) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  handlePopupShow() {
    // this.setState({ showPopup: true });
    console.log(this.state.showPopup);
  }

  render() {
    console.log(this.state.showPopup);

    return (
      <div className="main-content">
        <CalendarContent showPopup={this.handlePopupShow} />
        <Popup displayPopup={true} />
      </div>
    );
  }
}

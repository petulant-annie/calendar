import * as React from 'react';

import CalendarContent from '../../calendarContent/calendar-content';
import Popup from '../../components/popup/popup';

import './style/main.sass';

export default class Main extends React.Component {
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
    const showTaskEditor = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ showPopup: true });
      console.log(this.state.showPopup);
    };

    return showTaskEditor;
  }

  handlePopupHide() {
    const hideTaskEditor = (e: React.MouseEvent) => {
      e.preventDefault();
      this.setState({ showPopup: false });
      console.log(this.state.showPopup);
    };

    return hideTaskEditor;
  }

  render() {
    return (
      <div className="main-content" onClick={this.handlePopupHide()}>
        <CalendarContent
          showPopup={this.handlePopupShow()}
        />
        <Popup
          showPopup={this.state.showPopup}
        />
      </div>
    );
  }
}

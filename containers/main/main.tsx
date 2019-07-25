import * as React from 'react';

import CalendarContent from '../../components/calendarContent/calendar-content';
import Popup from '../popup/popup';

import './style/main.sass';

interface IMainState {
  state: {
    popupClassName: string,
    showPopup: boolean,
  };
}

export default class Main extends React.Component<IMainState> {
  state: {
    popupClassName: string,
    showPopup: boolean,
  };
  constructor(props: any) {
    super(props);
    this.state = {
      popupClassName: 'calendar-prompt-hide',
      showPopup: false,
    };
  }

  changePopupClassName() {
    this.setState({ popupClassName: 'calendar-prompt-shown' });
  }

  handlePopupShow() {
    const showTaskEditor = (e: React.MouseEvent) => {
      e.preventDefault();
      this.setState({ showPopup: true });
      this.changePopupClassName();
    };

    return showTaskEditor;
  }

  render() {
    return (
      <div className="main-content">
        <CalendarContent
          showPopup={this.handlePopupShow()}
        />
        <Popup
          popupClassName={this.state.popupClassName}
        />
      </div>
    );
  }
}

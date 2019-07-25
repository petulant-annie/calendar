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
    // if (this.state.showPopup) {
      this.setState({ popupClassName: 'calendar-prompt-shown' });
    // } else this.setState({ popupClassName: 'calendar-prompt-hide' });
  }

  handlePopupShow() {
    const showTaskEditor = (e: React.MouseEvent) => {
      this.setState({ showPopup: true });
      this.changePopupClassName();
      console.log('bam');
      console.log(this.state);
    };

    return showTaskEditor;
  }

  render() {
    console.log(this.state.popupClassName);

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

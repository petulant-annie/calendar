import * as React from 'react';

import CalendarContent from '../../components/calendarContent/calendar-content';
import Popup from '../popup/popup';

export default class Main extends React.Component {

  render() {
    return (
      <div className="main-content">
        <CalendarContent />
        <Popup />
      </div>
    );
  }
}

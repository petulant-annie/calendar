import * as React from 'react';

import CalendarContent from '../../components/calendarContent/calendar-content';
import { IInitialState } from '../../interfaces';

import './style/main.sass';

export default class Main extends React.Component<IInitialState> {
  render() {
    return (
      <div className="main-content">
        <CalendarContent />
      </div>
    );
  }
}

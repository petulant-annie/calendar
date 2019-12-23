import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addTask } from '../../actions/taskActions';
import CalendarContent from '../../components/calendarContent/calendar-content';
import { IInitialState } from '../../interfaces';

import './style/main.sass';

class Main extends React.Component<IInitialState> {
  render() {
    return (
      <div className="main-content">
        <CalendarContent />
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { addTask },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

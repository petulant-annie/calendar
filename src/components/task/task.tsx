import * as React from 'react';

import './style/task.sass';

export default class Task extends React.Component {

  render() {
    return(
      <div className="task-main">
        <div className="task-time" />
        <div className="task-duration" />
        <div className="task-text" />
      </div>
    );
  }
}

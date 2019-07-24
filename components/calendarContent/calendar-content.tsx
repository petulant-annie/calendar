import * as React from 'react';

import './style/calendar.sass';

interface IPopup {
  showPopup: () => void;
}

export default class CalendarContent extends React.Component<IPopup> {
  showPopup: () => void;
  constructor(props: IPopup) {
    super(props);
    this.showPopup = this.props.showPopup;
  }

  render() {
    return (
      <table className="calendar">
        <tbody>
          <tr className="cell" onClick={this.showPopup}>
            <td>8:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>8:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>8:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>9:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>9:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>10:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>11:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>11:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>12:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>12:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>13:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>13:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>14:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>14:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>15:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>15:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>16:00</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>16:30</td>
            <td>{}</td>
          </tr>
          <tr className="cell" onClick={this.showPopup}>
            <td>17:00</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

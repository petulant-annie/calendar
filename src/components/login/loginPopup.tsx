import * as React from 'react';

export default class LoginPopup extends React.Component {
  state: { user: string };
  constructor(props: any) {
    super(props);
    this.state = { user: '' };
  }

  handleSetUser = (e: React.ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    this.setState({ user: target.value });
  }

  handleSaveUser = () => {
    localStorage.setItem('user', `${this.state.user}`);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="loginPopup"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  onChange={this.handleSetUser}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSaveUser}
              >Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

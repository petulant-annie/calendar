import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IInitialState } from '../../interfaces';
import { setUser } from '../../actions/taskActions';

interface ILoginPopup {
  setUser: (user: string) => void;
}

class LoginPopup extends React.Component<ILoginPopup> {
  state: { user: string };
  constructor(props: ILoginPopup) {
    super(props);
    this.state = { user: '' };
  }

  handleSetUser = (e: React.ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    this.setState({ user: target.value });
  }

  handleSaveUser = () => {
    if (this.state.user !== '') {
      localStorage.setItem('user', `${this.state.user}`);
      this.props.setUser(this.state.user);
    }
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
                data-dismiss="modal"
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

const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { setUser },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);

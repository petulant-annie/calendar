import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Header, Input, Modal, Form } from 'semantic-ui-react';

import { IInitialState } from '../../interfaces';
import { setUser } from '../../actions/taskActions';

interface ILoginPopup {
  setUser: (user: string) => void;
}

class LoginPopup extends React.Component<ILoginPopup> {
  state: { user: string; modalOpen: boolean; };
  constructor(props: ILoginPopup) {
    super(props);
    this.state = { user: '', modalOpen: false };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  handleSetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    this.setState({ user: target.value });
  }

  handleSaveUser = () => {
    if (this.state.user !== '') {
      localStorage.setItem('user', `${this.state.user}`);
      this.props.setUser(this.state.user);
    }
    this.handleClose();
  }

  render() {
    const triggerButton = (
      <Button
        onClick={this.handleOpen}
        color="blue"
        basic={true}
      >Login
      </Button>
    );

    return (
      <Modal
        trigger={triggerButton}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Header content="Login" />
        <Form>
          <Form.Input
            placeholder="username"
            size="large"
            fluid={true}
            onChange={this.handleSetUser}
          />
        </Form>
        <Modal.Actions>
          <Button
            onClick={this.handleClose}
          >Cancel
          </Button>
          <Button
            primary={true}
            onClick={this.handleSaveUser}
          >Login
          </Button>
        </Modal.Actions>
      </Modal>
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

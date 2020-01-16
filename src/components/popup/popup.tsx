import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Header, TextArea, Modal, Form, Message } from 'semantic-ui-react';

import { TIMESTAMP } from '../../constants';
import { IInitialState } from '../../interfaces';
import { addTask, getTasks, errorAction } from '../../actions/taskActions';

interface IModal {
  user: string;
  error: boolean;
  addTask: (data: { user: string, start: string, duration: number, title: string }) => void;
  getTasks: (user: string) => void;
  errorAction: (error: boolean) => void;
}

class AddTaskModal extends React.Component<IModal> {
  selectStart: HTMLSelectElement;
  selectEnd: HTMLSelectElement;
  state: {
    start: string;
    startDuration: number;
    end: string;
    endDuration: number;
    title: string;
    modalOpen: boolean;
  };

  constructor(props: IModal) {
    super(props);
    this.state = {
      start: '',
      startDuration: 0,
      end: '',
      endDuration: 0,
      title: '',
      modalOpen: false,
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.errorAction(false);
  }

  handleSelectStart = (e: React.SyntheticEvent<HTMLElement, Event>, value: object) => {
    const select = value as HTMLSelectElement;
    Object.entries(TIMESTAMP).find((elem) => {
      if (select.value === elem[0]) {
        this.setState({ start: elem[1], startDuration: elem[0] });
      }
    });
  }

  handleSelectEnd = (e: React.SyntheticEvent<HTMLElement, Event>, value: object) => {
    const select = value as HTMLSelectElement;
    Object.entries(TIMESTAMP).find((elem) => {
      if (select.value === elem[0]) {
        this.setState({ end: elem[1], endDuration: elem[0] });
      }
    });
  }

  handleTitleChange = (e: React.SyntheticEvent, data: object) => {
    const input = data as HTMLTextAreaElement;
    this.setState({ title: input.value });
  }

  handleSaveTask = async () => {
    if (this.props.user && this.props.user.length > 0) {
      const duration = this.state.endDuration - this.state.startDuration;
      const data = {
        duration,
        user: this.props.user,
        start: this.state.start,
        title: this.state.title,
      };
      if (duration > 0 && this.state.title !== '') {
        await this.props.addTask(data);
        await this.props.getTasks(this.props.user);
        await this.handleClose();
      } else {
        this.props.errorAction(true);
      }
    }
  }

  render() {
    const timeSelect = (
      Object.entries(TIMESTAMP).map((value: [string, string]) => {
        return ({
          key: `${value[0]}`,
          value: `${value[0]}`,
          text: `${value[1]}`,
        });
      })
    );

    const triggerButton = (
      <Button
        onClick={this.handleOpen}
        color="blue"
        basic={true}
      >Add task
      </Button>
    );

    const errorMessage = (
      <Message negative={true}>
        <Message.Header>Error!</Message.Header>
        <p>Start time must be earlier than the end</p>
        <p>Task cannot be empty!</p>
      </Message>
    );

    return (
      <Modal
        trigger={triggerButton}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Header content="Add task" />
        {this.props.error ? errorMessage : ''}
        <Form>
          <Form.Group widths="equal">
            <Form.Select
              fluid={true}
              options={timeSelect}
              placeholder="Start"
              onChange={this.handleSelectStart}
            />
            <Form.Select
              fluid={true}
              options={timeSelect}
              placeholder="End"
              onChange={this.handleSelectEnd}
            />
          </Form.Group>
          <TextArea
            rows={3}
            onChange={this.handleTitleChange}
          />
        </Form>
        <Modal.Actions>
          <Button
            onClick={this.handleClose}
          >Cancel
          </Button>
          <Button
            primary={true}
            onClick={this.handleSaveTask}
          >Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    { addTask, getTasks, errorAction },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);

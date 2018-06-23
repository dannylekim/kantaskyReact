import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import EditTaskButton from "./editTaskButton";
import TaskForm from "./taskForm";

class EditTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: this.props.name,
      description: this.props.description,
      status: this.props.status,
      importance: this.props.importance,
      category: this.props.category,
      user: this.props.user,
      userName: this.props.userName,
      dueDate: this.props.dueDate,
      id: this.props.id,
      group: this.props.group
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
    this.props.closeModalFunction();
  }

  //this should do the same shit
  openModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
  }

  backModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Modal
        trigger={
          <Button inverted color="blue" onClick={this.openModal}>
            <Icon name="checkmark" /> Edit Task
          </Button>
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm
              onClickFunction={this.handleInputChange}
              categories={this.props.categories}
              state={this.state}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            onClick={() => {
              this.openModal();
            }}
          >
            Back
          </Button>
          <EditTaskButton task={this.state} toggleModal={this.toggleModal} />
          <Button basic color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditTaskModal;

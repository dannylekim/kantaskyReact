import React from "react";
import {
  Dropdown,
  Modal,
  Label,
  Button,
  Icon,
  Form,
  TextArea
} from "semantic-ui-react";
import EditTaskButton from "./editTaskButton";

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

  //this just opens this modal 
  // openModal() {
  //   this.setState({ showModal: !this.state.showModal });
  // }

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
            <Form>
              <Form.Field>
                <label>Task Name</label>
                <Form.Input
                  placeholder="Input Task Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <TextArea
                placeholder="Task Description"
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select a User"
                search
                selection
                options={[
                  {
                    key: this.state.user,
                    text: this.state.user,
                    value: this.state.user
                  }
                ]}
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select an importance"
                search
                selection
                options={[
                  { text: "normal", key: 1, value: "normal" },
                  { text: "urgent", key: 2, value: "urgent" },
                  { text: "important", key: 3, value: "important" }
                ]}
                value={this.state.importance}
                onChange={this.handleInputChange}
                name="importance"
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select a status"
                search
                selection
                options={[
                  { text: "pending", key: 4, value: "pending" },
                  { text: "ongoing", key: 5, value: "ongoing" },
                  { text: "completed", key: 6, value: "completed" }
                ]}
                value={this.state.status}
                onChange={this.handleInputChange}
                name="status"
              />
              <br />
              <br />
              Due date:{" "}
              {this.state.dueDate && (
                <Label color="purple"> {this.state.dueDate} </Label>
              )}
              <br />
              <br />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={() => {this.openModal()}}>Back</Button>
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

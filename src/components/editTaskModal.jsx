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

class EditTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
    this.props.closeModalFunction();
  }

  //this just opens this modal
  openModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    // let importanceColor, statusColor;
    // if (this.props.importance === "urgent") importanceColor = "red";
    // else if (this.props.importance === "important") importanceColor = "orange";
    // else importanceColor = "yellow";

    // if (this.props.status === "ongoing") statusColor = "orange";
    // else if (this.props.status === "pending") statusColor = "grey";
    // else statusColor = "teal";

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
                <input placeholder="Input Task Name" value={this.props.name} />
              </Form.Field>
              <TextArea
                placeholder="Task Description"
                value={this.props.description}
              />
              <Dropdown
                placeholder="Category"
                search
                selection
                options={this.props.category}
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select a User"
                search
                selection
                options={this.props.user}
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select an importance"
                search
                selection
                options={this.props.importance}
              />
              <br />
              <br />
              <Dropdown
                placeholder="Select a status"
                search
                selection
                options={this.props.status}
              />
              <br />
              <br />
              Due date:{" "}
              {this.props.dueDate && (
                <Label color="purple"> {this.props.dueDate} </Label>
              )}
              <br />
              <br />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="blue" onClick={this.toggleModal}>
            <Icon name="checkmark" /> Save Changes
          </Button>
          <Button basic color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditTaskModal;

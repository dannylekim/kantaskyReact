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

class EditGroupModal extends React.Component {
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
                <Form.Field>
                <label>Task Name</label>
                <input placeholder="Input Team Leader Name" value={this.props.teamLeader} />
              </Form.Field>


              <Dropdown
                placeholder="Category"
                search
                selection
                options={this.props.category}
              />
             
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

export default EditGroupModal;

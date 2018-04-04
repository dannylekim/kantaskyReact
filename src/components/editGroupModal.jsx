import React from "react";
import {
  Dropdown,
  Modal,
  Button,
  Icon,
  Form,
  TextArea
} from "semantic-ui-react";

class EditGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      teamLeader: "",
      description: "",
      users: "",
      category: "",
      name: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    const group = {
      users: this.props.users,
      name: this.props.name,
      description: this.props.description,
      category: this.props.category,
      teamLeader: this.props.teamLeader
    };
    console.log(group);
    this.setState(group);
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
    return (
      <Modal
        trigger={
          <Button inverted color="blue" onClick={this.openModal}>
            <Icon name="checkmark" /> Edit Group
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
                <label>Group Name</label>
                <input placeholder="Input Group Name" value={this.state.name} />
              </Form.Field>
              <TextArea
                placeholder="Group Description"
                value={this.state.description}
              />
              <Form.Field>
                <label>Team Leader</label>
                <input
                  value={(this.state.teamLeader) ? this.state.teamLeader.name : null}
                />
              </Form.Field>
              <Dropdown
                placeholder="Select a new team Leader"
                search
                selection
                options={this.state.category}
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

import React from "react";
import {
  Modal,
  Button,
  Icon,
  Form,
  Dropdown
} from "semantic-ui-react";

class UpdateUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Modal trigger={<Dropdown.Item text="Edit Profile" />}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <Form.Input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Form.Input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <Button basic color="green">
            <Icon name="check" /> Save Changes
          </Button>
          <Button basic secondary color="red">
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default UpdateUserModal;

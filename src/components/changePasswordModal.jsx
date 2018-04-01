import React from "react";
import {
  Modal,
  Button,
  Icon,
  Form,
  Dropdown
} from "semantic-ui-react";

class ChangePasswordModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
  }


  handleSubmit(){
      if(this.state.password === this.state.confirmPassword)
      this.handleSubmit()
  }

  render() {
    return (
      <Modal trigger={<Dropdown.Item text="Change Password" />}>
        <Modal.Header>Change Password</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Current Password</label>
                <Form.Input
                  value={this.state.oldPassword}
                  name="oldPassword"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>New Password</label>
                <Form.Input
                  value={this.state.password}
                  name="password"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Form.Input
                  value={this.state.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <Button basic color="green" onClick={this.handleSubmit}>
            <Icon name="check" /> Change Password
          </Button>
          <Button basic secondary color="red">
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ChangePasswordModal;

import React from "react";
import { Modal, Button, Icon, Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { changePassword } from "../redux/user/userActionDispatcher";

class ChangePasswordModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      password: null,
      oldPassword: null,
      confirmPassword: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * This is done to initialize the profile page and set it up with information
   *
   * @memberof ProfilePage
   */
  initializePage() {
    const userProps = this.props.user;
    //done to check for different. Could be extracted into a utility method if need be
    if (userProps && userProps._id !== this.state.id) {
      this.setState({ id: userProps._id });
    }
  }
  componentDidUpdate() {
    this.initializePage();
  }
  componentWillMount() {
    this.initializePage();
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
  }

  handleSubmit() {
    if (this.state.password === this.state.confirmPassword)
      this.props.changePassword(this.state.password, this.state.id); //TODO:
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
                  name="oldPassword"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>New Password</label>
                <Form.Input
                  name="password"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Form.Input
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="green" onClick={this.handleSubmit}>
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

const mapToState = state => ({ user: state.user.user });
const mapToDispatch = {
  changePassword
};
export default connect(mapToState, mapToDispatch)(ChangePasswordModal);

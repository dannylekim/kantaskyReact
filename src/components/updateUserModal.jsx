import React from "react";
import { Modal, Button, Icon, Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateAccount } from "../redux/user/userActionDispatcher";

class UpdateUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      id: null,
      showModal: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  /**
   * This is done to initialize the profile page and set it up with information
   *
   * @memberof ProfilePage
   */
  initializePage() {
    const userProps = this.props.user;
    //done to check for different. Could be extracted into a utility method if need be
    if (
      userProps &&
      userProps.firstName !== this.state.firstName &&
      userProps.lastName !== this.state.lastName &&
      userProps.email !== this.state.email &&
      userProps._id !== this.state.id
    ) {
      const user = {
        firstName: userProps.firstName,
        lastName: userProps.lastName,
        email: userProps.email,
        id: userProps._id
      };
      if (user !== this.state) {
        this.setState(user);
      }
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
    const newAccountDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    this.props.updateAccount(newAccountDetails, this.state.id);
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Modal
        open={this.state.showModal}
        onClose={this.toggleModal}
        trigger={
          <Dropdown.Item text="Edit Profile" onClick={this.toggleModal} />
        }
      >
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
          <Button inverted color="green" onClick={this.handleSubmit}>
            <Icon name="check" /> Save Changes
          </Button>
          <Button basic secondary color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapToState = state => ({ user: state.user.user });
const mapToDispatch = {
  updateAccount
};
export default connect(
  mapToState,
  mapToDispatch
)(UpdateUserModal);

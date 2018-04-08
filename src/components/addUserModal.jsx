import React from "react";
import { Modal, Button, Icon, Form } from "semantic-ui-react";
import MenuButton from "./menuButton";
import userAPI from "../api/userApi";

class SearchUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: null,
      lastName: null,
      email: null,
      errors: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({ showModal: !this.state.showModal, errors: null });
  }

  async handleSearch() {
    let response;
    try {
      response = await userAPI.searchUser(this.state.email);
    } catch (err) {
      response = err;
    }
    if (response.status === 200) {
      this.setState({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        errors: null
      });
    } else {
      this.setState({ errors: response.data, firstName: null, lastName: null });
    }
  }

  //this just opens this modal
  openModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Modal
        trigger={
          <MenuButton onClick={this.toggleModal} color="blue" icon="add user" />
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
        <Modal.Header>Add User</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Find User by Email</label>
                <Form.Input
                  placeholder="Email..."
                  name="email"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
            </Form>
            {this.state.firstName} {this.state.lastName}
            {this.state.errors}
          </Modal.Description>
          <br />
          <Button inverted color="blue" onClick={this.handleSearch}>
            Search User!
          </Button>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default SearchUserModal;

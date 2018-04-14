import React from "react";
import {
  Dropdown,
  Modal,
  Button,
  Icon,
  Form,
  TextArea
} from "semantic-ui-react";
import { connect } from "react-redux";
import { editGroup } from "../redux/group/groupActionDispatcher";

class EditGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      teamLeader: "",
      description: "",
      users: "",
      category: "",
      name: "",
      id: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    let users = [];
    if (this.props.users) {
      this.props.users.forEach(user => {
        const userOption = {
          text: user.userId, //TODO: Swap for name
          key: user.userId,
          value: { user }
        };
        users.push(userOption);
      });
    }
    const group = {
      users: users,
      name: this.props.name,
      description: this.props.description,
      category: this.props.category,
      teamLeader: this.props.teamLeader,
      id: this.props.id
    };
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

  handleSubmit() {
    let updatedGroup = Object.assign({}, this.state);
    delete updatedGroup.showModal;
    const groupId = updatedGroup.id;
    delete updatedGroup.users;
    this.props.editGroup(updatedGroup, groupId); //TODO: Receive a success message
    
    this.toggleModal();
  }

  handleInputChange(event, { value, name }) {
    //set the appropriate value to the state
    this.setState({ [name]: value });
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
        <Modal.Header>Edit Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Group Name</label>
                <Form.Input
                  placeholder="Input Group Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <TextArea
                placeholder="Group Description"
                value={this.state.description}
                name="description"
                onChange={this.handleInputChange}
              />
              <Form.Field>
                <label>Team Leader</label>
                <input
                  value={
                    this.state.teamLeader ? this.state.teamLeader.name : null
                  }
                />
              </Form.Field>
              <Dropdown
                placeholder="Select a new team Leader"
                search
                selection
                options={this.state.users}
                name="teamLeader"
                onChange={this.handleInputChange}
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="blue" onClick={this.handleSubmit}>
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

const mapStateToProps = state => ({});
const mapDispatch = { editGroup };
export default connect(mapStateToProps, mapDispatch)(EditGroupModal);

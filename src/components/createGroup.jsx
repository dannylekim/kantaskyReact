import React from "react";
import { Button, Modal, Icon, Popup } from "semantic-ui-react";
import { createGroup } from "../redux/group/groupActionDispatcher";
import GroupForm from "./groupForm";
import { connect } from "react-redux";
import MenuButton from "./menuButton";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      category: null,
      description: null,
      showModal: false
    };
    this.addGroup = this.addGroup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }
  /**
   * Handles all input changes within the form
   *
   * @param {any} event
   * @memberof loginForm
   */
  handleInputChange(event, data) {
    const value = data.value;
    const name = data.name;

    //set the appropriate value to the state
    this.setState({ [name]: value });
  }

  toggleAddModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  addGroup() {
    let newGroup = Object.assign({}, this.state);
    newGroup.showModal = undefined;
    this.props.createGroup(newGroup);
    const nullState = {
      name: null,
      category: null,
      description: null
    };
    this.setState({ nullState });
    this.toggleAddModal();
  }

  render() {
    return (
      <Modal
        trigger={
          <Popup
            trigger={
              <MenuButton
                onClick={this.toggleAddModal}
                color="green"
                icon="add"
              />
            }
            content="Add a group"
            size='tiny'
            position='bottom center'
          />
        }
        open={this.state.showModal}
        onClose={this.toggleAddModal}
      >
        <Modal.Header>Create a Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <GroupForm onChangeFunction={this.handleInputChange} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="green" onClick={this.addGroup}>
            <Icon name="checkmark" /> Confirm
          </Button>
          <Button inverted color="red" onClick={this.toggleAddModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = state => ({});
const mapDispatch = {
  createGroup
};
export default connect(
  mapState,
  mapDispatch
)(CreateGroup);

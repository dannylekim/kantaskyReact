import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import MenuButton from "./menuButton";
import { connect } from "react-redux";

class DeleteGroupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      errors: null,
      groupId: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
      errors: null
    });
  }

  componentWillUpdate() {
    if (this.props.groups) {
      const thisGroup = this.props.groups.find(group => {
        return group._id === this.state.groupId;
      });
      if (thisGroup && thisGroup.name !== this.state.name) {
        this.setState({ name: thisGroup.name });
      }
    }
    if (this.props.groupId !== this.state.groupId) {
      this.setState({ groupId: this.props.groupId });
    }
  }

  async handleSubmit() {}

  //this just opens this modal
  openModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Modal
        trigger={
          <MenuButton onClick={this.toggleModal} color="red" icon="archive" />
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
        <Modal.Header>Delete Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Are you sure you'd like to delete this group: {this.state.name}?
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="red" onClick={this.handleSubmit}>
            <Icon name="delete" /> Delete Group
          </Button>
          <Button basic onClick={this.toggleModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = state => ({ groups: state.group.groups });
export default connect(mapState)(DeleteGroupModal);

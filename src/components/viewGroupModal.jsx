import React from "react";
import { Modal, Button, Icon, Label, Popup } from "semantic-ui-react";
import MenuButton from "./menuButton";
import EditGroupModal from "./editGroupModal";
import HorizontalList from "./horizontalList";
import { connect } from "react-redux";

class ViewGroupModal extends React.Component {
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
  }

  //this just opens this modal
  openModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  componentWillUpdate() {
    if (this.props.groups) {
      const viewGroup = this.props.groups.filter(
        group => group._id === this.state.groupId
      );
      if (
        viewGroup.length === 1 &&
        (viewGroup[0].name !== this.state.name ||
          viewGroup[0].description !== this.state.description ||
          viewGroup[0].teamLeader.leaderId !== this.state.teamLeader.leaderId ||
          viewGroup[0].users.length !== this.state.users.length)
      ) {
        viewGroup[0].showModal = this.state.showModal;
        viewGroup[0].groupId = this.state.groupId;
        this.setState(viewGroup[0]);
      }
    }
    if (this.props.groupId !== this.state.groupId) {
      this.setState({ groupId: this.props.groupId });
    }
  }

  render() {
    return (
      <Modal
        trigger={
          <Popup
            trigger={
              <MenuButton onClick={this.toggleModal} color="blue" icon="info" />
            }
            content="View Group Details"
            size="tiny"
            position="bottom center"
          />
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
        <Modal.Header>{this.state.name}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Description: {this.state.description}
            <br />
            <br />
            Team Leader:
            <Label color="blue">
              {this.state.teamLeader ? this.state.teamLeader.name : ""}
            </Label>
            <br />
            <br />
            <HorizontalList users={this.state.users} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <EditGroupModal
            users={this.state.users}
            name={this.state.name}
            description={this.state.description}
            category={this.state.category}
            teamLeader={this.state.teamLeader}
            id={this.state._id}
            closeModalFunction={this.toggleModal}
          />
          <Button basic color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
const mapState = state => ({ groups: state.group.groups });
export default connect(mapState)(ViewGroupModal);

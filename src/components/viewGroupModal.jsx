import React from "react";
import { Modal, Button, Icon, Label } from "semantic-ui-react";
import MenuButton from "./menuButton";
import EditGroupModal from "./editGroupModal";
import HorizontalList from "./horizontalList";

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

  componentWillReceiveProps() {
    if (this.props.group) {
      this.props.group.showModal = this.state.showModal;
      this.setState(this.props.group);
    }
  }

  render() {
    return (
      <Modal
        trigger={
          <MenuButton onClick={this.toggleModal} color="blue" icon="info" />
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
            <HorizontalList users={this.state.users}/>
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

export default ViewGroupModal;

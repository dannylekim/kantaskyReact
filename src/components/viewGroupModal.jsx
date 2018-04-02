import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import MenuButton from "./menuButton";
import EditGroupModal from "./editGroupModal";

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

  componentWillReceiveProps(){
    if(this.props.group){
      this.props.group.showModal = this.state.showModal
      this.props.group.teamLeader = this.props.group.teamLeader.name
      this.setState(this.props.group)
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
        <Modal.Header>View Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* {this.state.name}
            {this.state.description}
            {this.state.teamLeader}
            {this.state.category}
            {this.state.users} */}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <EditGroupModal
            users={this.state.users}
            name={this.state.name}
            description={this.state.description}
            category={this.state.category}
            teamLeader={this.state.teamLeader}
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

export default (ViewGroupModal);

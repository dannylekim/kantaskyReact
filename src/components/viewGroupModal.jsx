import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import MenuButton from "./menuButton";
import EditGroupModal from "./editGroupModal";
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

  componentWillReceiveProps(){
    if(this.props.group){
      console.log(this.props.group)
    }
  }


  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  //this just opens this modal
  openModal() {
    this.setState({ showModal: !this.state.showModal });
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
            {this.props.name}
            {this.props.description}
            {this.props.teamLeader}
            {this.props.category}
            {this.props.users}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <EditGroupModal
            users={this.props.users}
            name={this.props.name}
            description={this.props.description}
            category={this.props.category}
            teamLeader={this.props.teamLeader}
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


const mapStateToProps = state => { console.log(state); return {} };
const mapDispatch = () => async dispatch => { 
  dispatch({type:null})
}
export default connect(mapStateToProps, mapDispatch)(ViewGroupModal);

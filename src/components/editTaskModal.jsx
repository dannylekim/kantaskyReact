import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import EditTaskButton from "./editTaskButton";
import TaskForm from "./taskForm";
import { connect } from "react-redux";

class EditTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: this.props.name,
      description: this.props.description,
      status: this.props.status,
      importance: this.props.importance,
      category: this.props.category,
      user: this.props.user,
      userName: this.props.userName,
      dueDate: this.props.dueDate,
      id: this.props.id,
      groupId: this.props.groupId,
      users: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //this toggles and closes the previous modal behind it
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
    this.props.closeModalFunction();
  }

  //this should do the same shit
  openModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  handleInputChange(event, data) {
    const value = data.value;
    const name = data.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });

    if (this.props.categories && name === "category") {
      let foundCategory = this.props.categories.find(category => {
        return category.key === value;
      });
      if (!foundCategory) {
        this.props.categories.push({ key: value, text: value, value: value });
      }
    }
  }

  backModal() {
    this.setState({ showModal: false });
  }

  componentWillUpdate(){
    console.log(this.props.groups)
    if(this.props.groups && !this.state.users && this.props.groupId){
      const group = this.props.groups.find((group) => {
        return group._id === this.props.groupId
      })

      const usersKeyObject = group.users.map((user) => {
        return {key: user.userId, text: user.userName || user.userId, value: user.userId}
      })

      this.setState({users: usersKeyObject})
    }
  }

  render() {
    return (
      <Modal
        trigger={
          <Button inverted color="blue" onClick={this.openModal}>
            <Icon name="checkmark" /> Edit Task
          </Button>
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <TaskForm
              onClickFunction={this.handleInputChange}
              categories={this.props.categories}
              state={this.state}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            onClick={() => {
              this.openModal();
            }}
          >
            Back
          </Button>
          <EditTaskButton task={this.state} toggleModal={this.toggleModal} />
          <Button basic color="red" onClick={this.toggleModal}>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = state => ({groups: state.group.groups});
const mapDispatch = {};
export default connect(
  mapState,
  mapDispatch
)(EditTaskModal);

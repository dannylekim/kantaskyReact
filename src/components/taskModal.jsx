import React from "react";
import { Header, Modal, Label, Button, Icon, Grid, Transition } from "semantic-ui-react";
import Task from "./task";
import RemoveTaskButton from "./removeTaskButton";
import EditTaskModal from "./editTaskModal";

class taskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      boxVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
        boxVisible: true
      }), this.props.timing * 300
    );
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    let importanceColor, statusColor;
    if (this.props.importance === "urgent") importanceColor = "red";
    else if (this.props.importance === "important") importanceColor = "orange";
    else importanceColor = "yellow";

    if (this.props.status === "ongoing") statusColor = "orange";
    else if (this.props.status === "pending") statusColor = "grey";
    else statusColor = "teal";
    return (
      <Modal
        trigger={ //Trigger component
          <Transition
            transitionOnMount={true}
            duration={800}
            animation='fade down'
            visible={this.state.boxVisible}
          >
            <Task
              color={this.props.color}
              name={this.props.name}
              description={this.props.description}
              user={this.props.userName}
              importance={this.props.importance}
              {...this.props.rest}
              onClick={this.toggleModal}
            />
          </Transition>
        }
        open={this.state.showModal}
        onClose={this.toggleModal}
      >
          <Modal.Header>{this.props.name}</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Grid>
                <Grid.Column width={10}>
                  <Header>{this.props.category}</Header>
                  <hr />
                  {this.props.description}
                </Grid.Column>
                <Grid.Column width={5} >
                  <br />
                  Assigned to: <Label color="blue"> {this.props.userName} </Label>
                  <br />
                  <br />
                  Importance:{" "}
                  <Label color={importanceColor}>{this.props.importance} </Label>
                  <br />
                  <br />
                  Status: <Label color={statusColor}> {this.props.status} </Label>
                  <br />
                  <br />
                  Due date:{" "}
                  {this.props.dueDate && (
                    <Label color="purple"> {this.props.dueDate} </Label>
                  )}
                  <br />
                  <br />
                  Created date:{" "}
                  {this.props.createdDate && (
                    <Label color="pink"> {this.props.createdDate} </Label>
                  )}
                </Grid.Column>
              </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            {this.props.canEdit && 
            <EditTaskModal
              closeModalFunction={this.toggleModal}
              name={this.props.name}
              dueDate={this.props.dueDate}
              status={this.props.status}
              importance={this.props.importance}
              user={this.props.user}
              userName = {this.props.userName}
              category={this.props.category}
              description={this.props.description}
              id={this.props.id}
              groupId={this.props.group}
              categories={this.props.categories}
            />
            }
            {this.props.canEdit &&
            <RemoveTaskButton
              id={this.props.id}
              modalFunction={this.toggleModal}
            />
            }
            <Button basic color="red" onClick={this.toggleModal}>
              <Icon name="remove" /> Close
          </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}

export default taskModal;

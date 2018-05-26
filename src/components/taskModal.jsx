import React from "react";
import { Header, Modal, Label, Button, Icon, Grid } from "semantic-ui-react";
import Task from "./task";
import RemoveTaskButton from "./removeTaskButton";
import EditTaskModal from "./editTaskModal";

class taskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
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
          trigger={
            <Task
              name={this.props.name}
              description={this.props.description}
              user={this.props.user}
              importance={this.props.importance}
              {...this.props.rest}
              onClick={this.toggleModal}
            />
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
                  Assigned to: <Label color="blue"> {this.props.user} </Label>
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
            <EditTaskModal
              closeModalFunction={this.toggleModal}
              name={this.props.name}
              dueDate={this.props.dueDate}
              status={this.props.status}
              importance={this.props.importance}
              user={this.props.user}
              category={this.props.category}
              description={this.props.description}
              id={this.props.id}
              group={this.props.group}
            />
            <RemoveTaskButton
              id={this.props.id}
              modalFunction={this.toggleModal}
            />
            <Button basic color="red" onClick={this.toggleModal}>
              <Icon name="remove" /> Close
          </Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export default taskModal;

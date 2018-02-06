import React from "react";
import ListOfTasks from "../../components/listOfTasks";
import { connect } from "react-redux";

class TaskPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return <ListOfTasks />;
  }
}

//====================== REDUX CONNECTION =========================

const mapState = state => ({ tasks: state.task.tasks });
const mapDispatch = {
  //getTasks
};
export default connect(mapState, mapDispatch)(TaskPage);

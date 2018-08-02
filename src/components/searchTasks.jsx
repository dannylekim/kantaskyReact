import React from "react";
import SearchItems from "./searchItems";
import {connect} from "react-redux";
import { searchTask } from "../redux/task/taskActionDispatcher";

class SearchTasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SearchItems searchFunction={this.props.searchTask} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatch = { searchTask };
export default connect(
  mapStateToProps,
  mapDispatch
)(SearchTasks);

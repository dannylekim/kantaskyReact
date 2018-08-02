import React from "react";
import SearchItems from "./searchItems";
import {connect} from "react-redux";
import { searchTask } from "../redux/task/taskActionDispatcher";

class SearchTasks extends React.Component {

  render() {
    return <SearchItems searchFunction={this.props.searchTask} placeholder="Search Tasks..." lastSearchString={this.props.lastSearchString}/>;
  }
}

const mapStateToProps = state => ({
  lastSearchString: state.task.lastSearchString
});
const mapDispatch = { searchTask };
export default connect(
  mapStateToProps,
  mapDispatch
)(SearchTasks);

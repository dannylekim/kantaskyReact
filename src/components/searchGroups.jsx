import React from "react";
import SearchItems from "./searchItems";
import {connect} from "react-redux";
import { searchGroup } from "../redux/group/groupActionDispatcher";

class SearchGroups extends React.Component {

  render() {
    return <SearchItems searchFunction={this.props.searchGroup} placeholder="Search Groups..." lastSearchString={this.props.lastSearchString}/>;
  }
}

const mapStateToProps = state => ({
  lastSearchString: state.group.lastSearchString
});
const mapDispatch = { searchGroup };
export default connect(
  mapStateToProps,
  mapDispatch
)(SearchGroups);

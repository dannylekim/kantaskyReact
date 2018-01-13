import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Higher order component for requiring authentication
export default ComposedComponent => {
  class Authentication extends Component {

    //If user is not authenticated, send to login on this component mount
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push("/login");
      }
    }

    //If user is not authenticated, send to login on updates
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push("/login");
      }
    }

    PropTypes = {
      router: PropTypes.object
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapState = state => ({ authenticated: state.user.authenticated });
  return connect(mapState)(Authentication);
};

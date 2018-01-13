import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Higher Order Component that passes before whatever it takes in
export default ComposedComponent => {
  class NotAuthentication extends Component {

    //Verifies if the user is authenticated. If yes, redirect back on first arrival
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push("/");
      }
    }

    //Verifies if the user is authenticated. If yes, redirect back on updates
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push("/");
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
  return connect(mapState)(NotAuthentication);
};

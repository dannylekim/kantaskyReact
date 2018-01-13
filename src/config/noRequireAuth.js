import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default ComposedComponent => {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push("/");
      }
    }

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

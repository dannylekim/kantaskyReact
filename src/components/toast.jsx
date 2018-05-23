import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  deleteToastError,
  deleteToastSuccess
} from "../redux/toaster/toasterActionDispatcher";

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 2500
};

class Toast extends Component {
  componentDidUpdate() {
    if (this.props.messages) {
      let messages = this.props.messages;
      if (messages.errMsg.length > 0)
        for (let messageObj of messages.errMsg) {
          toast.error(messageObj.message, toastOptions);
          deleteToastError(messageObj.id);
        }
      if (messages.msg.length > 0)
        for (let messageObj of messages.msg) {
          toast.success(messageObj.message, toastOptions);
          deleteToastSuccess(messageObj.id);
        }
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ messages: state.toaster });
export default connect(mapStateToProps)(Toast);

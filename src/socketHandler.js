import { updateUserSuccess } from "./redux/user/userActions";
import {
  updateGroupSuccess,
  deleteGroupSuccess,
  createGroupSuccess
} from "./redux/group/groupActions";
import {
  updateTaskSuccess,
  createTaskInGroupSuccess,
  removeTaskSuccess
} from "./redux/task/taskActions";
import store from "./redux/configureStore"; //normally, rather than importing the store, this should be redux-thunked, but this is a quicker implementation

export default class SocketHandler {
  constructor(socket) {
    this.socket = socket;
    this.setupSocket();
  }

  setupSocket() {
    // === User ====
    this.socket.on("userUpdate", data => {
      this.handleUserUpdate(data);
    });

    //==== Task =====
    this.socket.on("taskUpdate", data => this.handleTaskUpdate(data));
    this.socket.on("taskCreate", data => this.handleTaskCreation(data));
    this.socket.on("taskDelete", data => this.handleTaskDeletion(data));

    //===== Group ====
    this.socket.on("groupUpdate", data => this.handleGroupUpdate(data));
    this.socket.on("groupDelete", data => this.handleGroupDelete(data));
    this.socket.on("groupCreate", data => this.handleGroupCreation(data));
  }

  // ============ USER ========================

  //Generally used for invites and syncing between multiple windows
  handleUserUpdate = data => {
    store.dispatch(updateUserSuccess(data));
  };

  // ========== GROUP ==========================

  //Only used for syncing between windows
  handleGroupCreation = data => {
    store.dispatch(createGroupSuccess(data));
  };

  handleGroupUpdate = data => {
    store.dispatch(updateGroupSuccess(data));
  };

  handleGroupDelete = data => {
    store.dispatch(deleteGroupSuccess(data));
  };

  // ================ TASK ======================

  handleTaskCreation = data => {
    store.dispatch(createTaskInGroupSuccess(data));
  };

  handleTaskDeletion = data => {
    store.dispatch(removeTaskSuccess(data));
  };

  handleTaskUpdate = data => {
    store.dispatch(updateTaskSuccess(data));
  };
}

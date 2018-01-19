//These are the actions that call the action types. In other words, a dispatcher

import * as types from "./groupActionTypes";

export const getGroup = groups => ({
    type: types.GET_GROUP,
    groups: groups
  }),


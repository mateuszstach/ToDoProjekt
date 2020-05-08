import {
  ADD_NEW_TASK,
  DELETE_ONE_TASK,
  TOGGLE_ONE_TASK,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

let newTaskId = 1;

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addNewTask(taskName) {
  return {
    type: ADD_NEW_TASK,
    task: {
      index: newTaskId++,
      name: taskName,
      completed: false,
    },
  };
}

export function toggleOneTask(index) {
  return {
    type: TOGGLE_ONE_TASK,
    index: index,
  };
}

export function deleteOneTask(index) {
  console.log('deleteOneTask action creation, id:' + index);
  return {
    type: DELETE_ONE_TASK,
    index: index,
  };
}

export function setVisibilityFilters(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter,
  };
}

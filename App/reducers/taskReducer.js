import {visibilityFilters} from '../actions';
import {
  ADD_NEW_TASK,
  TOGGLE_ONE_TASK,
  SET_VISIBILITY_FILTER,
  DELETE_ONE_TASK,
} from '../actions/actionTypes';

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  tasks: [
    {
      index: 102,
      name: 'kupić chleb tostowy',
      completed: false,
    },

  ],
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    // case 1
    case ADD_NEW_TASK:
      console.log('nowe zadanie ' + JSON.stringify(action.task));
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.task],
      });
    // case 2
    case TOGGLE_ONE_TASK:
      return Object.create({}, state, {
        tasks: state.tasks.map((task, index) => {
          if (index === action.index) {
            return Object.create({}, task, {
              completed: !task.completed,
            });
          }
        }),
      });
    // case 3
    case SET_VISIBILITY_FILTER:
      return Object.create({}, state, {
        visibilityFilter: action.filter,
      });
    //case 4
    case DELETE_ONE_TASK:
      // console.log('received state ' + JSON.stringify(state));
      console.log('index to filter ' + JSON.stringify(action.index));
      var newTasks = state.tasks.filter(task => task.index !== action.index);
      console.log('wyczyszczono zadanie ' + JSON.stringify(newTasks));
      return Object.assign({}, state, {
        tasks: newTasks,
      });
    default:
      return state;
  }
}

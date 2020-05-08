import {connect} from 'react-redux';
import TaskInput from '../componets/TaskInput';

import {addNewTask} from '../actions/index';

const mapStateToProps = state => {
  return {
    task: state.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: taskName => dispatch(addNewTask(taskName)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TaskInput);
// export default TaskInputContainer;

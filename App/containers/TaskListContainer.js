import TaskList from '../componets/TaskList';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  console.log('Tasklist containser: State');
  console.log(JSON.stringify(state));
  return {
    tasks: state.tasksReducer.tasks,
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  null,
)(TaskList);
export default TaskListContainer;

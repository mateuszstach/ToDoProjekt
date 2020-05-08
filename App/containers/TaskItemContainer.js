import TaskItem from '../componets/TaskItem';
import {connect} from 'react-redux';
import {deleteOneTask} from './../actions/index';


// const mapStateToProps = state => {
//   return {
//
//   }
// }

const mapDispatchToProps = dispatch => {
  // alert(JSON.stringify(dispatch))
  return {
    deleteTask: index => {
      dispatch(deleteOneTask(index));
    },
  };
}

const TaskItemContainer = connect(
  null,
  mapDispatchToProps,
)(TaskItem);
export default TaskItemContainer;

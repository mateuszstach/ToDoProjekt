import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import TaskItemContainer from '../containers/TaskItemContainer';
import {Colors} from '../resources/Colors';

class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tasks}
          renderItem={({item}) => <TaskItemContainer task={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginBottom: 100,
    backgroundColor: Colors.gray,
  },
});

export default TaskList;

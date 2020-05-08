import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../resources/Colors';

class TaskItem extends Component {
  render() {
    return (
      <View>
        <View style={styles.taskItem}>
          <Text style={styles.taskName}>
            {this.props.task.index} - {this.props.task.name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log('id zostalo usuniete:' + this.props.task.index);
              this.props.deleteTask(this.props.task.index);
            }}>
            <Text style={styles.removeButton}>Usuń</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  taskItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskName: {
    fontWeight: 'bold',
    flex: 1,
    color: Colors.primaryText,
  },
  removeButton: {
    backgroundColor: Colors.dark,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: Colors.primaryText,
  }
})
export default TaskItem;

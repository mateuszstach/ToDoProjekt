import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {Colors} from '../resources/Colors';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  render() {
    return (
      <View style={styles.inputForm}>
        <TextInput
          style={styles.textInput}
          placeholder="Wprowadź zadanie"
          onChangeText={value => {
            this.setState({
              task: value,
            });
          }}
          value={this.state.task}
        />
        <View style={styles.button}>
          <Button
            title="Dodaj"
            color={Colors.primary}
            onPress={() => {
              if (!this.state.task.trim()) {
                return;
              }
              // using container add task
              this.props.addTask(this.state.task);
              // clear the textinput
              this.setState({
                task: '',
              });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
  },
  textInput: {
    elevation: 1,
    flex: 1,
    paddingLeft: 10,
    height: 50,
    // borderColor: Colors.primary,
    // alignSelf: 'center'
  },
  button: {
    marginRight: 3,
    alignSelf: 'center',
    backgroundColor: Colors.light,
    // elevation: 6,
  },
});

export default TaskInput;

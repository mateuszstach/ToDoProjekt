import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import TaskListContainer from './App/containers/TaskListContainer';
import TaskInputContainer from './App/containers/TaskInputContainer';
import {Colors} from './App/resources/Colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.dark} />
      <SafeAreaView>
        <TaskInputContainer />
        <TaskListContainer />
      </SafeAreaView>
    </>
  );
};


export default App;

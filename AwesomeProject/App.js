import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoInout from './screens/TodoInput';

export default class App extends React.Component {
  render() {
    return (
      <View style= { styles.container } >
        <View style= { styles.main } >
          <TodoInout />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    aliginItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    aliginItems: 'center'
  }
});

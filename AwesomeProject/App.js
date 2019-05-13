import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import TodoInout from './screens/TodoInput';
import Main from './screens/Main'

export default class App extends React.Component {
  render() {
    return (
      <View style= { styles.container } >
        <View style= { styles.main } >
          <Main />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // aliginItems: 'center',
    justifyContent: 'center',
  },
});

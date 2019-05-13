import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  massage: {
    color: '#000',
  },
})

export default class Main extends React.Component {
  render() {
    return(
      <View style= { styles.container }>
        <Text style= { styles.massage }>this is new app</Text>
      </View>
    )
  }
}
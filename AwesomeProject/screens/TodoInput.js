import React, { Compornent } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5
  },
  button: {
    flex: 1,
    backgroundColor: "#008080",
    marginLeft: 5,
    aliginItems: 'center',
    paddingTop: 10,
    paddingBottm: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeigt: '500'
  }
})

export default class TodoInout extends Compornent {
  render() {
    return(
      <View style= { styles.container } >
        <TextInput style= { styles.textInput} />
        <TouchableOpacity style= { styles.button }>
          <Text style= { styles.buttonText } />
        </TouchableOpacity>
      </View>
    );
  }
}

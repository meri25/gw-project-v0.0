import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    padding: 20,
  },
  coffee: {
    // backgroundColor: 'powderblue',
    alignItems: 'center',
  },
  // coffee_quantity: {
  //   color: '#3e2723',
  //   fontSize: 70,
  // }
});

export default class Main extends React.Component {
  render() {
    return(
      <View style= { styles.container }>
          <Image style= { styles.coffee} source={ require('../assets/coffee.png')}></Image>
      </View>
    )
  }
}
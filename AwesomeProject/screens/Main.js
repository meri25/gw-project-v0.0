import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  coffee: {
    backgroundColor: 'powderblue',
    alignItems: 'center',
    height:200,

  },
  coffee_img: {
    marginTop: 100,
    padding: 20,
  }
    // coffee_quantity: {
  //   color: '#3e2723',
  //   fontSize: 70,
  // }
});

export default class Main extends React.Component {
  render() {
    return(
      <View style= { styles.container }>
        <View style= {styles.coffee}>
          <Image style= { styles.coffee_img} source={ require('../assets/coffee.png')}></Image>
          <Button
  // onPress={ onPress }
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        </View>
      </View>
    )
  }
}
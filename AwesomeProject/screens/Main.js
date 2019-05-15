import React from 'react';
import { View, Image, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

export default class Main extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return(
      <View style= {{alignItems: 'center'}}>
          <Image style= {{margin: 50}} source= { require('../assets/coffee.png')} ></Image>
          <Button
            onPress={this.toggleModal}
            title= "DRINK"
            color= "#841584"
            accessibilityLabel= "drink"
          />
          <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    )
  }
}


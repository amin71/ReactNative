import React, { Component } from 'react';
import { View, Text, 
StyleSheet,
ScrollView,
TouchableOpacity,
TouchableWithoutFeedback,
TextInput} from 'react-native';
import {colors} from '../Theme'
class City extends Component {
  static navigationOption = (props) => {
    return {
      title: props.navigation.state.params.city.city,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '400',
      }
    }
  }
  state: {
    name: '',
    info: ''
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  addLocation = () => {
    if (this.state.name === '' || this.state.info === '') return
    const { city } = this.props.navigation.state.params
    const location = {
      name: this.state.name,
      info: this.state.info
    }
    this.props.screenProps.addLocation(location, city)
    this.setState({
      name: '',
      info: ''
    })
  }
  render() {
    const { city } = this.props.navigation.state.params
    return (
      <View style={{flex: 1}}>
        {
          city.location.map((location, index) => (
            <View>
              <Text>{location.name}</Text>
            </View>
          )
          )
        }
        <TextInput
          value={this.state.name}
          placeholder='Location name'
          onChangeText={(val) => onChangeText('name', val)}
          style={styles.input}
          placeholderTextColor='white'
        />
        <TextInput
          value={this.state.info}
          placeholder='Location info'
          onChangeText={(val) => onChangeText('info', val)}
          style={[styles.input,styles.input2]}
          placeholderTextColor='white'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    position: 'absolute',
    height: 50,
    bottom: 104,
    backgroundColor: colors.primary,
    color: 'white',
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    left: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})
export default City;

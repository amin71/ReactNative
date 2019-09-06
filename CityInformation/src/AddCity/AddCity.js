import React, {Component} from 'react';
import {View, Text, TextInput,  StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../Theme'
import uuidV4 from 'uuid/v4'
class AddCity extends Component {
  
    state = {
      city: '',
      country: ''
    }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  Submmit = () => {
    if (this.state.city === '' || this.state.country === '') return
    const city = {
      city: this.state.city,
      country: this.state.country,
      locations: [],
      id: uuidv()
    }
    this.props.screenProps.addcity(city)
    this.setState({
      city: '',
      country: ''
    }, () => {
      this.props.navigation.navigate('Cities')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities app</Text>
        <TextInput
        placeholder='City name'
        value={this.state.city}
        onChangeText={val => this.onChangeText('city', val)}
        style={styles.input}
        />
        <TextInput
        placeholder='Country name'
        value={this.state.country}
        onChangeText={val => this.onChangeText('city', val)}
        style={styles.input}
        />
        <TouchableOpacity onPress={this.Submmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add city</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    margin: 10,
    paddingHorizontal: 8,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
})
export default AddCity;

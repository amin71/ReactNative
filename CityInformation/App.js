
import React from 'react';
import {
  StyleSheet,
  AsyncStorage
} from 'react-native';
import Tabs from './src/index';
const key = 'cities'
export default class App extends React.Component  {
    state = {
      cities: []
    }
    async componentDidMount () {
      try {
        const cities = await AsyncStorage.getItem(key)
        this.setState({
          cities: JSON.parse(cities)
        })
      } catch (e) {
        console.log('e:', e)
      }
    }
  addCity =(city) => {
    const cities = this.state.cities
    cities.push(city)
    AsyncStorage.setItem(key,JSON.stringify(cities))
    .then(() => console.log('Item stored'))
    .catch((err) => {
      console.log('error: ', err)
    })
    this.setState({cities})
  }
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })
    const chosenCity = this.state.cities[index]
    chosenCity.location.push(location)
    const cities = [
      ...this.state.cities.slice(0,index),
      chosenCity,
      ...this.state.cities.slice(index+1)
    ]
    this.setState({
      cities
    }, () => {
      AsyncStorage.setItem(key,JSON.stringify(cities))
        .then(() => console.log('Item stored'))
        .catch((err) => {
          console.log('error: ', err)
    })
    })
  }
  render () {
    return <Tabs 
      screenProps={{
        cities: this.state.cities,
        addCity: this.addCity,
        addLocation: this.addLocation
      }}
    />
  } 
}
// const styles = StyleSheet.create({
 
// });

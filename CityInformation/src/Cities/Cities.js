import React, { Component } from 'react';
import { View,
  ScrollView,
  TouchableWithoutFeedbackBase,
   Text, StyleSheet } from 'react-native';
import colors from '../Theme'
class Cities extends Component {
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    }
  }
 viewCity = (city) => {
  this.props.navigation.navigate('city', {city})
 }
  render() {
    return (
      <ScrollView>
        <View>
          {
            this.props.screenProps.cities.map((city,index) => (
              <View>
                <TouchableWithoutFeedbackBase
                  onPress={() => this.viewCity(city)}
                >
                  <View style={StyleSheet.cityContainer}>
                    <Text style={StyleSheet.city}>{city.city}</Text>
                    <Text style={StyleSheet.country}>{city.country}</Text>
                  </View>
                </TouchableWithoutFeedbackBase>
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: 'rgba(0,0,0.5)'
  }
})
export default Cities;

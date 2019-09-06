import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import City from './Cities/City'
import Cities from './Cities/Cities'
import AddCity from './AddCity/AddCity'
import { colors } from './Theme'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const CitiesNav = createStackNavigator({
    Cities: { screen: Cities},
    City: { screen: City}
}, {
    navigationOptions:{
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})
const Tabs = createBottomTabNavigator({
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity}
})
export default Tabs;

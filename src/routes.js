import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen'
import ExpensesScreen from './screens/Expenses'
import WalletScreen from './screens/WalletScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddScreen from './screens/AddScreen'
import { Ionicons } from '@expo/vector-icons'
import normalize  from './Util/normalize'

const TabScreens = createBottomTabNavigator(
  {
    Home : {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon : ({focused, tintColor }) => (
          <Ionicons name={'md-home'} size={normalize(26)} color={tintColor}/>
        )  
      }
    },
    Expenses : {
      screen: ExpensesScreen,
      navigationOptions: {
        tabBarIcon : ({focused, tintColor }) => (
          <Ionicons name={'logo-usd'} size={normalize(26)} color={tintColor}/>
        )
      }
    },
    Add : {
      screen: AddScreen,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarIcon : ({focused, tintColor }) => (
          <View
            style={{
              position: 'absolute',
              bottom: normalize(20),
              height: normalize(58),
              width: normalize(58),
              borderRadius: normalize(58),
              backgroundColor: '#5a95ff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Ionicons name={'md-add'} size={normalize(46)} color={'#ffffff'}/>
          </View>
        )
      }
    },
    Wallet : {
      screen: WalletScreen,
      navigationOptions: {
        tabBarIcon :  ({focused, tintColor }) => (
          <Ionicons name={'md-basket'} size={normalize(26)} color={tintColor}/>
        )  
      }
    },
    Profile : {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon :  ({focused, tintColor }) => ( 
          <Ionicons name={'md-person'} size={normalize(26)} color={tintColor}/>
        )  
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#002985',
      inactiveTintColor: '#77869e',
      showLabel:true,
      style: {
        backgroundColor: '#ffffff',
        borderTopColor: 'transparent',
        height: normalize(65),
        alignItems: 'center',
        justifyContent: 'center'
      },
    }
  }
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      TabScreens,
    },
    {
      backBehavior:"initialRoute"
    }
  )
)

export default Routes


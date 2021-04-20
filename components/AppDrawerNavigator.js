import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyRecievedBooksScreen from '../screens/MyRecievedBooksScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions : {
      drawerIcon:<Icon name="home" type="font-awesome"/>
    }
    },
    MyDonations:{
screen:MyDonationScreen,
navigationOptions : {
  drawerIcon:<Icon name="gift" type="font-awesome"/>,
  drawerLabel:"My Donations"
}
    },
    Notification : {
      screen : NotificationScreen,
      navigationOptions:{
        drawerIcon:<Icon name="bell" type="font-awesome"/>,
        drawerLabel:"Notifications"
      }
    },
    MyRecievedBooks :{
      screen: MyRecievedBooksScreen,
      navigationOptions:{
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
        drawerLabel:"My Recieved Books"
      }
    },
    Setting : {
      screen : SettingScreen,
      navigationOptions:{
        drawerIcon:<Icon name="settings" type="fontawesome"/>,
        drawerLabel:"Settings"
      }
    },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
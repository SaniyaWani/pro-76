import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStories from './ReadStories';
import WriteStories from './WriteStories';
import WelcomeScreen from './WelcomeScreen';




export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  read: {screen: ReadStories},
  write: {screen: WriteStories},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>
    {
      const routeName = navigation.state.routeName;
      console.log(routeName);
     
    }
  })
}

);

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
 
  BottomTab:{screen: TabNavigator}
})


const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

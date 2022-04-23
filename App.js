import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './src/Screens/Main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native-paper';
import Search from './src/Screens/Search';
import Add from './src/Screens/Add';
import Chat from './src/Screens/Chat';
import Save from './src/Screens/Save';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 5 : size;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              size = focused ? size + 5 : size;
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
              size = focused ? size + 5 : size + 5;
              color = 'green';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
              size = focused ? size + 5 : size;
            } else if (route.name === 'Save') {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline';
              size = focused ? size + 5 : size;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarHideOnKeyboard: true,
          keyboardHide: true,
          showLabel: false,
          tabBarStyle: {
            height: 70,
          },
        })}
        tabBarOption={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={
            {
              // headerTitleAlign: "right",
            }
          }
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Save" component={Save} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

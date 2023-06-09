import React from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import {MoviesListStackScreen} from './MoviesList';
import {MyAccountStackScreen} from './MyAccount';
import {HomeStackScreen} from './Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {UsersListStackScreen} from './UsersList';

const MainTabScreenOptions = ({route}: any) => ({
  tabBarIcon: ({focused, color, size}: any) => {
    let icon;
    if (route.name === 'HomeStack') {
      icon = focused
        ? (icon = <Icon name="home" size={size} color={color} />)
        : (icon = <Icon name="home-outline" size={size} color={color} />);
    } else if (route.name === 'MoviesListStack') {
      icon = focused
        ? (icon = <Icon name="movie-open" size={size} color={color} />)
        : (icon = <Icon name="movie-open-outline" size={size} color={color} />);
    } else if (route.name === 'MyAccountStack') {
      icon = focused
        ? (icon = <Icon name="account" size={size} color={color} />)
        : (icon = <Icon name="account-outline" size={size} color={color} />);
    }
    // You can return any component that you like here!
    return icon;
  },
  tabBarStyle: {
    backgroundColor: colors.mediumBlack,
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.lightGrey,
  headerShown: false,
});

export function MainScreen(): JSX.Element {
  return (
    <MainTabNavigator.Navigator
      initialRouteName="HomeStack"
      screenOptions={MainTabScreenOptions}>
      <MainTabNavigator.Screen
        name="HomeStack"
        options={{title: 'Home'}}
        component={HomeStackScreen}
      />
      <MainTabNavigator.Screen
        name="MoviesListStack"
        options={{title: 'Movies'}}
        component={MoviesListStackScreen}
      />
      <MainTabNavigator.Screen
        name="UsersListStack"
        options={{title: 'Users'}}
        component={UsersListStackScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccountStack"
        options={{title: 'Account'}}
        component={MyAccountStackScreen}
      />
    </MainTabNavigator.Navigator>
  );
}

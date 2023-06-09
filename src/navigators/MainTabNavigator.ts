import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type MainTabParams = {
  HomeStack: undefined;
  MoviesListStack: undefined;
  UsersListStack: undefined;
  MyAccountStack: undefined;
};

export const MainTabNavigator = createBottomTabNavigator<MainTabParams>();

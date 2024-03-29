import React, {useContext, useEffect, useState} from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {PreloadedQueriesContext} from '../relay/PreloadedQueriesContext';
import {HomeStackScreen} from './HomeStack';
import {MovieListStackScreen} from './MovieListStack';
import {UserListStackScreen} from './UserListStack';
import {MyAccountStackScreen} from './MyAccountStack';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';
import {StandardLoadingIcon} from '../components/Display/StandardLoadingIcon';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';

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
    } else if (route.name === 'UsersListStack') {
      icon = focused
        ? (icon = <Icon name="account-group" size={size} color={color} />)
        : (icon = (
            <Icon name="account-group-outline" size={size} color={color} />
          ));
    } else if (route.name === 'MyAccountStack') {
      icon = focused
        ? (icon = <Icon name="account" size={size} color={color} />)
        : (icon = <Icon name="account-outline" size={size} color={color} />);
    }
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

type MainScreenProps = NativeStackScreenProps<RootStackParams, 'Main'>;

export function MainScreen({navigation}: MainScreenProps) {
  const [authServiceInitialized, setAuthServiceInitialized] = useState(false);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setAuthServiceInitialized(true);
    if (!user) {
      navigation.navigate('Login');
    }
  }

  useEffect(() => auth().onAuthStateChanged(onAuthStateChanged));

  if (!authServiceInitialized) {
    return (
      <View style={styles.container}>
        <StandardLoadingIcon />
      </View>
    );
  }
  return <MainScreenAfterLogin />;
}

function MainScreenAfterLogin(): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  return (
    <MainTabNavigator.Navigator screenOptions={MainTabScreenOptions}>
      <MainTabNavigator.Screen
        name="HomeStack"
        options={{title: 'Home'}}
        listeners={{
          tabPress: () => preloadedQueries?.Home.loadQuery({}),
          state: () => preloadedQueries?.Home.loadQuery({}),
        }}
        component={HomeStackScreen}
      />
      <MainTabNavigator.Screen
        name="MoviesListStack"
        options={{title: 'Movies'}}
        listeners={{
          tabPress: () => preloadedQueries?.MoviesList.loadQuery({}),
        }}
        component={MovieListStackScreen}
      />
      <MainTabNavigator.Screen
        name="UsersListStack"
        options={{title: 'Users'}}
        listeners={{
          tabPress: () => preloadedQueries?.UserList.loadQuery({}),
          state: () => preloadedQueries?.UserList.loadQuery({}),
        }}
        component={UserListStackScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccountStack"
        options={{title: 'Account'}}
        listeners={{
          tabPress: () => preloadedQueries?.MyAccount.loadQuery({}),
          state: () => preloadedQueries?.MyAccount.loadQuery({}),
        }}
        component={MyAccountStackScreen}
      />
    </MainTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

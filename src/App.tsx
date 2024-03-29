import React from 'react';
import environment from './relay/environment';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {SignUpScreen} from './screens/SignUp/SignUp';
import {LoginScreen} from './screens/Login';
import {MainScreen} from './screens/Main';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './styles/theme';
import colors from './styles/colors';
import {
  PreloadedQueriesContext,
  usePreloadedQueries,
} from './relay/PreloadedQueriesContext';

function AppUI() {
  return (
    <PreloadedQueriesContext.Provider value={usePreloadedQueries()}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationContainerTheme}>
          <RootStackNavigator.Navigator
            initialRouteName="Main"
            screenOptions={{headerShown: false}}>
            <RootStackNavigator.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animation: 'slide_from_left',
              }}
            />
            <RootStackNavigator.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                animation: 'slide_from_right',
              }}
            />
            <RootStackNavigator.Screen name="Main" component={MainScreen} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PreloadedQueriesContext.Provider>
  );
}

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <AppUI />
    </RelayEnvironmentProvider>
  );
}

const navigationContainerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.darkBlack,
  },
};

export default App;

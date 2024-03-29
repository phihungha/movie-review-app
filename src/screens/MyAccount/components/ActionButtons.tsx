import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyAccountStackParams} from '../../../navigators/MyAccountStackNavigator';
import auth from '@react-native-firebase/auth';
import {Button} from '@rneui/themed';
import {PreloadedQueriesContext} from '../../../relay/PreloadedQueriesContext';
import {commitLocalUpdate} from 'relay-runtime';
import environment from '../../../relay/environment';

type MyAccountScreenProps = NativeStackScreenProps<
  MyAccountStackParams,
  'MyAccount'
>;

export function ActionButtons({
  navigation,
}: MyAccountScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  async function onSignOut() {
    await auth().signOut();
    navigation.replace('Login');
    commitLocalUpdate(environment, store => store.invalidateStore());
  }

  function goToEditScreen() {
    preloadedQueries?.ManageAccountInfo.loadQuery(
      {},
      {fetchPolicy: 'network-only'},
    );
    navigation.navigate('ManageAccountInfo');
  }

  return (
    <View style={styles.container}>
      <Button
        title="Edit profile"
        icon={{
          name: 'user',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        titleStyle={styles.title}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={goToEditScreen}
      />
      <Button
        title="Log out"
        icon={{
          name: 'logout',
          type: 'material-community',
          size: 15,
          color: 'white',
        }}
        iconRight
        onPress={onSignOut}
        titleStyle={styles.title}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  button: {
    backgroundColor: colors.mediumBlack,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
  },
  buttonContainer: {marginHorizontal: 4, marginVertical: 10, flex: 1},
  title: {marginTop: 4},
});

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';
import {TextLink} from '../components/Buttons/TextLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';
import auth from '@react-native-firebase/auth';

type LoginScreenProps = NativeStackScreenProps<RootStackParams, 'Login'>;

export function LoginScreen({navigation}: LoginScreenProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    await auth().signInWithEmailAndPassword(email, password);
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBlock>LOGIN</TitleBlock>

      <View>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email..."
        />
        <Input
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password..."
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={login}>LOGIN</Button>
        <TextLink
          text="Don't have an account? "
          textLink="Sign up now"
          onClicked={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    gap: 20,
  },
});

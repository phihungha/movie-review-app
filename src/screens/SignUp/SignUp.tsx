import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../../components/Display/TitleBlock';

import {TextLink} from '../../components/Text/TextLink';
import {DatePickerDialog} from '../../dialogs/DatePickerDialog';
import colors from '../../styles/colors';
import {ItemTitleOnly} from '../../components/Items/BottomSheetListItem';
import {ChooseTypeBottomSheet} from './dialogs/ChooseTypeBottomSheet';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

export function SignUpScreen({navigation}: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [type, setType] = useState('');

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const signUp = (emailText: string, passwordText: string) => {
    console.log(emailText + ' ' + passwordText);
    console.log('Call API');
  };

  const onSelectedDate = (date: Date) => {
    let tempDate = new Date(date);
    let dateToText =
      tempDate.getMonth() +
      1 +
      '/' +
      tempDate.getDate() +
      '/' +
      tempDate.getFullYear();
    setBirthdayText(dateToText);
  };

  const onSelectedType = (typeItem: ItemTitleOnly) => {
    setType(typeItem.title);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.space} />

        <TitleBlock>SIGN UP</TitleBlock>

        <View>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email..."
          />
          <Input
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name..."
          />

          <Input
            label="Birthday"
            value={birthdayText}
            disabled
            onChangeText={setBirthdayText}
            placeholder="Choose your date of birth..."
            rightIcon={
              <DatePickerDialog
                onSelectedDate={onSelectedDate}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="User type"
            value={type}
            onChangeText={setType}
            disabled
            placeholder="Choose user type..."
            rightIcon={
              <ChooseTypeBottomSheet
                onSelectedType={onSelectedType}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="Password"
            secureTextEntry={true}
            value={password}
            placeholder="Enter password..."
            onChangeText={setPassword}
          />
          <Input
            label="Re-enter password"
            secureTextEntry={true}
            value={rePassword}
            placeholder="Re enter your password..."
            onChangeText={setRePassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => signUp(email, password)} title="SIGN UP" />
          <TextLink
            text="Already have an account, "
            textLink="login"
            onClicked={navigateToLoginScreen}
            isUnderline={false}
          />
        </View>
        <View style={styles.space} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    gap: 20,
  },
  space: {
    height: 100,
  },
  iconStyle: {
    color: colors.white,
    fontSize: 25,
  },
});

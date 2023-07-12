import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';
import {ManageAccountProfilePictureDisplay} from './components/ManageAccountProfilePictureDisplay';
import {ManageAccountInformationDisplay} from './components/ManageAccountInformationDisplay';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export function ManageAccountInfo(): JSX.Element {
  const [birthdayText, setBirthdayText] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [name, setName] = useState('Name');
  const [uri, setUri] = useState('');

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };
  const onPressImage = async () => {
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response?.assets) {
        const uriResult = response.assets?.at(0)?.uri;
        setUri(uriResult ? uriResult : '');
      }
    });
  };
  const onSelectedName = (selectedName: string) => {
    setName(selectedName);
  };

  const onSelectedGender = (selectedGender: any) => {
    setGenderValue(selectedGender);
  };
  const onSelectedBirthday = (date: any) => {
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

  const onSaveInfo = () => {
    console.log('Call API');
    console.log(uri);
    console.log(name);
    console.log(genderValue);
    console.log(birthdayText);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ManageAccountProfilePictureDisplay
          nameValue={name}
          onSelectedName={onSelectedName}
          imageUri={uri}
          onSelectedImage={onPressImage}
        />
        <ManageAccountInformationDisplay
          birthdayValue={birthdayText}
          onSelectedDate={onSelectedBirthday}
          onSelectedGender={onSelectedGender}
        />
        <Button onPress={onSaveInfo}>Save</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  scrollView: {
    gap: 12,
  },
});

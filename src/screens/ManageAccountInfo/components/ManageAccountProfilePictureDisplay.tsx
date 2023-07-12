import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Input} from '@rneui/themed';
import {BigTitleText} from '../../../components/Text/BigTitleText';
import {TitleText} from '../../../components/Text/TitleText';

import {ActionCb} from '../../../types/ActionCb';
import colors from '../../../styles/colors';

export type OnSelectedName = (name: string) => void;

interface ManageAccountProfilePictureProps {
  imageUri?: string;
  nameValue: string;
  onSelectedName: OnSelectedName;
  onSelectedImage: ActionCb;
}

/**
 * @using display the profile picture in ManageAccountInfo Screen
 * @param {string} imageUri uri of image
 * @param {string} nameValue name of user
 * @param {OnSelectedName} onSelectedName action clicked when accept changing name from dialog (change name)
 * @param {ActionCb} onSelectedImage action clicked on Edit (change image)
 */
export function ManageAccountProfilePictureDisplay(
  props: ManageAccountProfilePictureProps,
): JSX.Element {
  const uri = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg';
  return (
    <View style={styles.container}>
      <BigTitleText style={styles.titleLine}>
        Change profile picture
      </BigTitleText>

      <View style={styles.avatarContainer}>
        <Avatar
          size={128}
          rounded
          source={{uri: props.imageUri ? props.imageUri : uri}}
          onPress={props.onSelectedImage}
        />

        <TitleText>{props.nameValue}</TitleText>

        <Input
          label="Name"
          value={props.nameValue}
          onChangeText={props.onSelectedName}
          placeholder="Enter name..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  titleLine: {
    alignSelf: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    backgroundColor: colors.mediumBlack,
  },
});

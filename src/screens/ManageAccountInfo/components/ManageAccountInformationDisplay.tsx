import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../../components/Text/BigTitleText';
import colors from '../../../styles/colors';
import {
  OnSelectedManageInformation,
  ManageBirthdayItem,
} from './ManageAccountInformationItem';
import DropDownPicker from 'react-native-dropdown-picker';
import {ItemSubtitleText} from '../../../components/Text/ItemSubtitleText';
import {Input} from '@rneui/themed';
import {Gender} from '../__generated__/ManageAccountInfoQuery.graphql';

interface ManageAccountInformationProps {
  birthdayValue: Date;
  onSelectedDate: OnSelectedManageInformation;

  gender: Gender | 'None';
  onSelectedGender: OnSelectedManageInformation;

  usernameValue: string;
  onSelectedUsername: OnSelectedManageInformation;

  emailValue: string;
  onSelectedEmail: OnSelectedManageInformation;
}

export function ManageAccountInformationDisplay(
  props: ManageAccountInformationProps,
): JSX.Element {
  const [isGenderOpen, setGenderOpen] = useState(false);
  const [genderItems, setGenderItems] = useState([
    {label: 'None', value: 'None'},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);

  const onSelectedItemDropdown = (item: any) => {
    props.onSelectedGender(item.value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Information</BigTitleText>
      </View>
      <View>
        <ItemSubtitleText>Username</ItemSubtitleText>
        <Input
          inputMode="text"
          value={props.usernameValue}
          onChangeText={(item: string) => props.onSelectedUsername(item)}
          placeholder="Enter username..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>

      <View>
        <ItemSubtitleText>Email</ItemSubtitleText>
        <Input
          inputMode="email"
          value={props.emailValue}
          onChangeText={(item: string) => props.onSelectedEmail(item)}
          placeholder="Enter your email..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>

      <View>
        <ItemSubtitleText>Gender</ItemSubtitleText>
        <DropDownPicker
          listMode="SCROLLVIEW"
          open={isGenderOpen}
          setOpen={setGenderOpen}
          value={props.gender}
          setValue={() => {}}
          items={genderItems}
          setItems={setGenderItems}
          onSelectItem={onSelectedItemDropdown}
          textStyle={styles.dropdownText}
          style={styles.dropdownContainer}
          containerStyle={styles.belowDropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>

      <View>
        <ItemSubtitleText>Birthday</ItemSubtitleText>
        <ManageBirthdayItem
          iconSize={24}
          iconColor={colors.white}
          value={props.birthdayValue}
          onSelected={props.onSelectedDate}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: colors.white,
  },
  dropdownContainer: {
    backgroundColor: colors.mediumBlack,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  aboveDropdown: {zIndex: 10001},
  belowDropdown: {zIndex: 10000},
  input: {
    backgroundColor: colors.mediumBlack,
    paddingTop: 5,
  },
});

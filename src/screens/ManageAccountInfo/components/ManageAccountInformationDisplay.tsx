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

interface ManageAccountInformationProps {
  iconSize?: number;
  iconColor?: string;

  birthdayValue: string;
  onSelectedGender: OnSelectedManageInformation;
  onSelectedDate: OnSelectedManageInformation;
}

export function ManageAccountInformationDisplay(
  props: ManageAccountInformationProps,
): JSX.Element {
  const [genderValue, setGenderValue] = useState('');
  const [isGenderOpen, setGenderOpen] = useState(false);
  const [genderItems, setGenderItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Information</BigTitleText>
      </View>

      <View>
        <ItemSubtitleText>Gender</ItemSubtitleText>
        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Sort by"
          open={isGenderOpen}
          setOpen={setGenderOpen}
          value={genderValue}
          setValue={setGenderValue}
          items={genderItems}
          setItems={setGenderItems}
          onSelectItem={(gender: any) => props.onSelectedGender(gender.value)}
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
});

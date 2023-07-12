import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RegularText} from '../../../components/Text/RegularText';
import colors from '../../../styles/colors';
import {ItemTitleOnly} from '../../../components/Items/BottomSheetListItem';
import {DatePickerDialog} from '../../../dialogs/DatePickerDialog';

export type OnSelectedManageInformation = (
  item: Date | ItemTitleOnly | string,
) => void;
interface ManageItemProps {
  value: string;
  rightIconComponent: React.ReactElement<{}>;
}

/**
 * @using general component for information item in ManageAccountInfo Screen
 * @param {string} value value want to show
 * @param {React.ReactElement<{}>} rightIconComponent the icon button in the right, it handle event to select many option
 */
export function ManageItem(props: ManageItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <RegularText>{props.value}</RegularText>
      {props.rightIconComponent}
    </View>
  );
}

interface ManageListItemProps {
  iconSize?: number;
  iconColor?: string;
  value: string;
  onSelected: OnSelectedManageInformation;
}

/**
 * @using item birthday for information display in ManageAccount Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} value value want to show
 * @param {OnSelectedManageInformation} onSelected the action when click on the icon button
 */
export function ManageBirthdayItem(props: ManageListItemProps): JSX.Element {
  return (
    <ManageItem
      value={props.value}
      rightIconComponent={
        <DatePickerDialog
          onSelectedDate={props.onSelected}
          iconColor={colors.white}
          iconSize={24}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mediumBlack,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
});

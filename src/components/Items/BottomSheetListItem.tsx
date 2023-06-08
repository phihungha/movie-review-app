import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';

type OnPress = () => void;

export interface ItemData {
  id: string;
  title: string;
}

interface ItemProps {
  item: ItemData;
  onPressItem: OnPress;
}

export function BottomSheetListItem(props: ItemProps): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.95}
      onPress={props.onPressItem}>
      <Text style={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  text: {
    color: colors.darkBlack,
    fontSize: fontSizes.md,
    fontFamily: fonts.primary,
  },
});

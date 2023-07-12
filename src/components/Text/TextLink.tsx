import React from 'react';
import {Pressable, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from './RegularText';
import {ActionCb} from '../../types/ActionCb';
import {TextProps} from '@rneui/themed';

type TextLinkProps = TextProps & {
  text: string;
  textLink: string;
  textStyle?: StyleProp<TextStyle>;
  textLinkStyle?: StyleProp<TextStyle>;
  onClicked?: ActionCb;
  isUnderline?: boolean;
};

export function TextLink(props: TextLinkProps): JSX.Element {
  return (
    <View style={[styles.textContainer, props.style]}>
      <RegularText style={[styles.text, props.textStyle]}>
        {props.text}
      </RegularText>

      <Pressable onPress={props.onClicked}>
        <RegularText
          style={[
            styles.linkText,
            props.isUnderline ? styles.underline : null,
            props.textLinkStyle,
          ]}
          {...props}>
          {props.textLink}
        </RegularText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
  text: {
    color: colors.lightGrey,
  },
  linkText: {
    color: colors.standardLink,
  },
  textContainer: {
    flexDirection: 'row',
  },
});

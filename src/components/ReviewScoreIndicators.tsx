import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextProps} from '../props/TextProps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';

/**
 *  The score review by critic user
 *  props:
 *    body: the reviews score want to display
 *  using:  <CriticReviewScoreIndicator>4.5</CriticReviewScoreIndicator>;
 */
export function CriticReviewScoreIndicator(props: TextProps): JSX.Element {
  return (
    <View style={[reviewScoreStyles.container]}>
      <Icon
        name="star"
        style={[reviewScoreStyles.item, reviewScoreStyles.marginEnd4]}
      />

      <Text
        style={[reviewScoreStyles.colorLightGrey, reviewScoreStyles.textScore]}>
        {props.children}
      </Text>
    </View>
  );
}

/** The score review by regular user
 *  props:
 *    body: the reviews score want to display
 *  using:  <UserReviewScoreIndicator>4.5</UserReviewScoreIndicator>;
 */
export function UserReviewScoreIndicator(props: TextProps): JSX.Element {
  return (
    <View style={[reviewScoreStyles.container]}>
      <Icon
        name="star"
        style={[reviewScoreStyles.item2, reviewScoreStyles.marginEnd4]}
      />

      <Text
        style={[reviewScoreStyles.colorLightGrey, reviewScoreStyles.textScore]}>
        {props.children}
      </Text>
    </View>
  );
}

const reviewScoreStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    fontSize: fontSizes.lg,
    color: colors.yellowStar,
  },
  item2: {
    fontSize: fontSizes.lg,
    color: colors.blueStar,
  },
  textScore: {
    paddingTop: 4,
  },
  fontSize16: {
    fontSize: fontSizes.lg,
  },
  marginStart4: {
    marginStart: 4,
  },
  marginEnd4: {
    marginEnd: 4,
  },
  marginEnd8: {
    marginEnd: 8,
  },
  marginBotton6: {
    marginBottom: 6,
  },
  colorPrimayBackground: {
    backgroundColor: colors.primary,
  },
  colorWhite: {
    color: colors.white,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});

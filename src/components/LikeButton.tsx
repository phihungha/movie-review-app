import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles/styles';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';

interface LikeButtonProps {
  children: React.ReactNode;
  isActive: boolean;
}

/**
 *  props:
 *    body: the like count want to display
 *    isActive: set the like button active or inactive
 *  using: <LikeButton isActive={true}>120</LikeButton>;
 *
 */
export function LikeButton(likeButtonProps: LikeButtonProps): JSX.Element {
  if (likeButtonProps.isActive) {
    const styleContainerActive = StyleSheet.compose(
      styles.containerMediumBlackCorner,
      likeButtonStyles.colorPrimaryBackground,
    );
    const styleTextActive = StyleSheet.flatten([
      styles.subTextLikeComment,
      likeButtonStyles.marginEnd8,
      likeButtonStyles.colorWhite,
    ]);
    const styleIconActive = StyleSheet.flatten([
      styles.subTextLikeComment,
      likeButtonStyles.marginEnd8,
      likeButtonStyles.fontSize16,
      likeButtonStyles.colorWhite,
      likeButtonStyles.marginBottom6,
    ]);
    return (
      <TouchableOpacity style={styleContainerActive}>
        <Text style={styleTextActive}>{likeButtonProps.children}</Text>
        <Icon style={styleIconActive} name="like1" />
        <Text style={styleTextActive}>Like</Text>
      </TouchableOpacity>
    );
  } else {
    const styleText = StyleSheet.compose(
      styles.subTextLikeComment,
      likeButtonStyles.marginEnd8,
    );
    const styleIcon = StyleSheet.flatten([
      styles.subTextLikeComment,
      likeButtonStyles.marginEnd8,
      likeButtonStyles.fontSize16,
      likeButtonStyles.marginBottom6,
    ]);
    return (
      <TouchableOpacity style={styles.containerMediumBlackCorner}>
        <Text style={styleText}>{likeButtonProps.children}</Text>
        <Icon style={styleIcon} name="like2" />
        <Text style={styleText}>Like</Text>
      </TouchableOpacity>
    );
  }
}
const likeButtonStyles = StyleSheet.create({
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
  marginBottom6: {
    marginBottom: 6,
  },
  colorPrimaryBackground: {
    backgroundColor: colors.primary,
  },
  colorWhite: {
    color: colors.white,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});

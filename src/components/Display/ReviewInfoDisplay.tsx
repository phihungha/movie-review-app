import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {graphql} from 'relay-runtime';
import {ReviewInfoDisplay$key} from './__generated__/ReviewInfoDisplay.graphql';
import {useFragment} from 'react-relay';
import {SectionText} from '../Text/SectionText';
import {dateToStandardDateFormat} from '../../utils/time-conversion';
import {RegularReviewScoreIndicator} from './RegularReviewScoreIndicator';
import {fontSizes, fonts} from '../../styles/typography';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';
import {TextLink} from '../Text/TextLink';

const ReviewInfoDisplayFragment = graphql`
  fragment ReviewInfoDisplay on Review {
    title
    content
    postTime
    score
    authorType
    externalUrl
  }
`;

export interface ReviewInfoDisplayProps {
  review: ReviewInfoDisplay$key | null;
  maxContentLineCount?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays info of a review.
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function ReviewInfoDisplay(
  props: ReviewInfoDisplayProps,
): React.JSX.Element {
  const data = useFragment(ReviewInfoDisplayFragment, props.review);

  const scoreIndicator =
    data?.authorType === 'Critic' ? (
      <CriticReviewScoreIndicator
        textStyle={styles.scoreText}
        fullScore={true}
        score={data?.score}
      />
    ) : (
      <RegularReviewScoreIndicator
        textStyle={styles.scoreText}
        fullScore={true}
        score={data?.score}
      />
    );

  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <SectionText>{data?.title ?? 'N/A'}</SectionText>
      <ItemSubtitleText>
        Posted on {dateToStandardDateFormat(new Date(data?.postTime))}
      </ItemSubtitleText>
      {scoreIndicator}
      <RegularText numberOfLines={props.maxContentLineCount}>
        {data?.content ?? 'N/A'}
      </RegularText>
      {data?.externalUrl && (
        <View>
          <RegularText style={styles.readMore}>Read more:</RegularText>
          <TextLink
            text=""
            textLink={data?.externalUrl}
            maxLinkLineCount={2}
            isUnderline={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.mediumBlack,
    gap: 4,
  },
  readMore: {
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.primaryBold,
  },
});

import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SubtitleText} from '../../components/Text/SubtitleText';
import {TitleText} from '../../components/Text/TitleText';
import {Button} from '@rneui/base';
import {graphql} from 'relay-runtime';
import {MoviePoster} from '../../components/Display/MoviePoster';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import type {MovieDetailsQuery as MovieDetailsQueryType} from './__generated__/MovieDetailsQuery.graphql';
import {HorizontalList} from '../../components/Lists/HorizontalList';
import {ActorListItem} from './components/ActorListItem';
import {RegularText} from '../../components/Text/RegularText';
import {SectionText} from '../../components/Text/SectionText';
import {
  dateToStandardFormat,
  secondsToLongFormat,
} from '../../utils/time-conversion';
import {CrewListItem} from './components/CrewListItem';
import {CriticAggregateScoreIndicator} from './components/CriticAggregateScoreIndicator';
import {RegularAggregateScoreIndicator} from './components/RegularAggregateScoreIndicator';

export const MovieDetailsQuery = graphql`
  query MovieDetailsQuery($id: ID!) {
    movie(id: $id) {
      title
      releaseDate
      runningTime
      posterUrl
      actingCredits {
        id
        ...ActorListItem
      }
      directors {
        id
        ...CrewListItem
      }
      ...CriticAggregateScoreIndicator
      ...RegularAggregateScoreIndicator
    }
  }
`;

type MovieDetailsScreenProps = NativeStackScreenProps<
  MainStackParams,
  'MovieDetails'
>;

export function MovieDetailsScreen(
  props: MovieDetailsScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.MovieDetails.queryRef) {
    return <></>;
  }
  return <MovieDetailsScreenWithData {...props} />;
}

function MovieDetailsScreenWithData({navigation}: MovieDetailsScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  const data = usePreloadedQuery<MovieDetailsQueryType>(
    MovieDetailsQuery,
    preloadedQueries!.MovieDetails.queryRef!,
  );

  const releaseDate = new Date(data.movie?.releaseDate ?? '0001-01-01');

  return (
    <ScrollView>
      <View style={styles.outerContainer} />
      <View style={styles.mainContainer}>
        <MoviePoster
          style={styles.posterImage}
          imageUrl={data.movie?.posterUrl}
        />

        <View style={styles.topInfoContainer}>
          <TitleText>{data.movie?.title}</TitleText>
          <SubtitleText> {releaseDate.getFullYear()}</SubtitleText>
        </View>

        <View style={styles.detailsInfoContainer}>
          <SimpleInfoSection
            name="Released on"
            value={dateToStandardFormat(releaseDate)}
          />
          <SimpleInfoSection name="Genres" value="Thriller, Action" />
          <SimpleInfoSection
            name="Synopsis"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat"
          />
          <SimpleInfoSection
            name="Running time"
            value={secondsToLongFormat(data.movie?.runningTime ?? -1)}
          />

          <InfoSection>
            <SectionText>Actors</SectionText>
            <HorizontalList
              data={data.movie?.actingCredits}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ActorListItem actingCredit={item} />}
            />
          </InfoSection>

          <InfoSection>
            <SectionText>Crews</SectionText>
            <HorizontalList
              data={data.movie?.directors}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <CrewListItem roleName="Director" crewMember={item} />
              )}
            />
          </InfoSection>

          <InfoSection>
            <SectionText>Average scores</SectionText>
            <View style={styles.scoreDisplaysContainer}>
              <CriticAggregateScoreIndicator movie={data.movie} />
              <RegularAggregateScoreIndicator movie={data.movie} />
            </View>
          </InfoSection>

          <SectionText>Reviews</SectionText>

          <View style={styles.ButtonContainer}>
            <Button
              onPress={() => navigation.navigate('CreateReview')}
              title="Create a new review"
              color="#EF3651"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function SimpleInfoSection({
  name,
  value,
}: {
  name: string;
  value?: string | number;
}) {
  return (
    <View>
      <SectionText>{name}</SectionText>
      <RegularText>{value}</RegularText>
    </View>
  );
}

function InfoSection({children}: {children: React.ReactNode}) {
  return <View style={styles.crewListContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  outerContainer: {
    height: 150,
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
  },
  posterImage: {
    position: 'absolute',
    top: -100,
    aspectRatio: 0.67,
    width: 110,
    marginHorizontal: 10,
  },
  topInfoContainer: {
    marginLeft: 135,
    marginTop: 5,
  },
  detailsInfoContainer: {
    padding: 10,
    gap: 10,
  },
  crewListContainer: {
    gap: 10,
  },
  scoreDisplaysContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
  },
  ButtonContainer: {
    width: 350,
    borderRadius: 5,
    alignSelf: 'center',
    padding: 10,
  },
  TabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  tabs: {
    width: 103,
  },
  ReviewList: {
    alignSelf: 'center',
    padding: 10,
  },
});

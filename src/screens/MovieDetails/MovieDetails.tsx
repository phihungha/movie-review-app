import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SubtitleText} from '../../components/Text/SubtitleText';
import {TitleText} from '../../components/Text/TitleText';
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
  dateToStandardDateFormat,
  secondsToLongFormat,
} from '../../utils/time-conversion';
import {CrewListItem} from './components/CrewListItem';
import {CriticAggregateScoreIndicator} from './components/CriticAggregateScoreIndicator';
import {RegularAggregateScoreIndicator} from './components/RegularAggregateScoreIndicator';
import {Button} from '@rneui/themed';
import {GenreListItem} from './components/GenreListItem';
import {ReviewOverview} from './components/ReviewOverview';

export const MovieDetailsQuery = graphql`
  query MovieDetailsQuery($id: ID!) {
    movie(id: $id) {
      title
      releaseDate
      runningTime
      posterUrl
      genres {
        ...GenreListItem
      }
      actingCredits {
        id
        ...ActorListItem
      }
      workCredits {
        id
        ...CrewListItem
      }
      ...CriticAggregateScoreIndicator
      ...RegularAggregateScoreIndicator
      ...ReviewOverview
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

  const releaseDate = new Date(data.movie?.releaseDate);

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
            value={dateToStandardDateFormat(releaseDate)}
          />

          <InfoSection>
            <SectionText>Genres</SectionText>
            <View style={styles.genresList}>
              {data.movie?.genres.map(i => (
                <GenreListItem genre={i} />
              ))}
            </View>
          </InfoSection>

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
              data={data.movie?.workCredits}
              keyExtractor={item => item.id}
              renderItem={({item}) => <CrewListItem crewMember={item} />}
            />
          </InfoSection>

          <InfoSection>
            <SectionText>Average scores</SectionText>
            <View style={styles.scoreDisplaysContainer}>
              <CriticAggregateScoreIndicator movie={data.movie} />
              <RegularAggregateScoreIndicator movie={data.movie} />
            </View>
          </InfoSection>

          <InfoSection>
            <SectionText>Reviews</SectionText>
            <Button
              onPress={() => navigation.navigate('CreateReview')}
              title="Create a new review"
            />
            <ReviewOverview movie={data.movie} navigation={navigation} />
          </InfoSection>
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
  genresList: {
    flexDirection: 'row',
    gap: 10,
  },
  detailsInfoContainer: {
    padding: 10,
    paddingBottom: 25,
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
});

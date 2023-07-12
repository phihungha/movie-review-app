import React, {Suspense, useContext} from 'react';
import {StyleSheet, View, ScrollView, Linking} from 'react-native';
import {TitleText} from '../../components/Text/TitleText';
import {SectionText} from '../../components/Text/SectionText';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {UserReviewOverviewList} from './components/UserReviewOverviewList';
import {UserThankedReviewOverviewList} from './components/UserThankedReviewOverviewList';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import {StandardAvatar} from '../../components/Display/StandardAvatar';
import {dateToStandardDateFormat} from '../../utils/time-conversion';
import {RegularText} from '../../components/Text/RegularText';
import colors from '../../styles/colors';
import {SmallSectionText} from '../../components/Text/SmallSectionText';
import {Button, Icon} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {UserWatchedOverviewList} from './components/UserWatchedOverviewList';
import {TextLink} from '../../components/Text/TextLink';

export const UserDetailsQuery = graphql`
  query UserDetailsQuery($id: ID!) {
    user(id: $id) {
      id
      name
      avatarUrl
      dateOfBirth
      gender
      username
      userType
      blogUrl
      ...UserReviewOverviewList
      ...UserThankedReviewOverviewList
      ...UserWatchedOverviewList
    }
  }
`;

type UserDetailsScreenProps = NativeStackScreenProps<
  MainStackParams,
  'UserDetails'
>;

export function UserDetailsScreen(props: UserDetailsScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.UserDetails.queryRef) {
    return <></>;
  }

  return <UserDetailsScreenWithData {...props} />;
}

function UserDetailsScreenWithData({
  navigation,
}: UserDetailsScreenProps): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery(
    UserDetailsQuery,
    preloadedQueries!.UserDetails.queryRef!,
  );
  const user = data.user;
  const userId = user?.id;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <StandardAvatar size={150} uri={user?.avatarUrl} />
        <TitleText>{user?.name ?? 'N/A'}</TitleText>
      </View>

      <View style={styles.infoBox}>
        <InfoSection
          name="Username"
          value={user?.username}
          icon={
            <Icon
              type="font-awesome"
              name="user"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="Gender"
          value={user?.gender}
          icon={
            <Icon
              type="foundation"
              name="male-female"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="Date of birth"
          value={dateToStandardDateFormat(user?.dateOfBirth)}
          icon={
            <Icon
              type="font-awesome"
              name="birthday-cake"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="User type"
          value={user?.userType}
          icon={
            <Icon
              type="material-community"
              name="account-tie"
              size={20}
              color={colors.primary}
            />
          }
        />

        {user?.userType === 'Critic' ? (
          <LinkInfoSection
            name="Website"
            value={user?.blogUrl}
            icon={
              <Icon
                type="material-community"
                name="web"
                size={20}
                color={colors.primary}
              />
            }
          />
        ) : undefined}
      </View>

      <View style={styles.listSection}>
        <SectionText>Reviews</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserReviewOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            navigation.navigate('UserReviewList', {});
            if (userId) {
              preloadedQueries?.UserReviewList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>

      <View style={styles.listSection}>
        <SectionText>Thanked reviews</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserThankedReviewOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            navigation.navigate('UserThankedReviewList', {});
            if (userId) {
              preloadedQueries?.UserThankedReviewList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>

      <View style={styles.listSection}>
        <SectionText>Recently Watched</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserWatchedOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            navigation.navigate('UserWatchedList', {});
            if (userId) {
              preloadedQueries?.UserWatchedList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>
    </ScrollView>
  );
}

interface InfoSectionProps {
  name: string;
  value?: string | null;
  icon?: React.ReactNode | null;
}

export function InfoSection({name, value, icon}: InfoSectionProps) {
  return (
    <View style={styles.infoSection}>
      <View style={styles.icon}>{icon}</View>
      <SmallSectionText>{name}:</SmallSectionText>
      <RegularText style={{color: colors.lightGrey}}>{value}</RegularText>
    </View>
  );
}

export function LinkInfoSection({name, value, icon}: InfoSectionProps) {
  return (
    <View style={styles.infoSection}>
      <View style={styles.icon}>{icon}</View>
      <SmallSectionText>{name}:</SmallSectionText>
      <TextLink
        onPress={() => (value ? Linking.openURL(value) : undefined)}
        text={''}
        textLink={value!}
        isUnderline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 15,
  },
  header: {
    paddingVertical: 15,
    gap: 15,
    alignItems: 'center',
  },
  infoBox: {
    padding: 15,
    backgroundColor: colors.mediumBlack,
    borderRadius: 15,
    gap: 10,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  listSection: {
    gap: 10,
  },
  icon: {
    marginBottom: 5,
    width: 20,
  },
});

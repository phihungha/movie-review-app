import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MyAccountScreen} from './MyAccount';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserLikedCommentsListScreen} from './UserThankedReviewList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';

export function MyAccountStackScreen(): React.JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator>
      <MyAccountStackNavigator.Screen
        name="MyAccount"
        options={{headerShown: false}}
        component={MyAccountScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieDetails"
        options={{headerShown: false}}
        component={MovieDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="CreateReview"
        component={CreateReviewScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserReviewList"
        component={UserReviewsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserThankedReviewList"
        component={UserLikedCommentsListScreen}
      />
    </MyAccountStackNavigator.Navigator>
  );
}

import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MyAccountScreen} from './MyAccount/MyAccount';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';
import {ManageAccountInfo} from './ManageAccountInfo/ManageAccountInfo';
import {EditReviewScreen} from './CreateReview/EditReview';
import {ReviewBreakdownScreen} from './ReviewBreakdown/ReviewBreakdown';
import {stackNavHeaderOptions} from '../styles/nav-header';

export function MyAccountStackScreen(): React.JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator>
      <MyAccountStackNavigator.Group screenOptions={stackNavHeaderOptions}>
        <MyAccountStackNavigator.Screen
          name="MyAccount"
          options={{headerShown: false}}
          component={MyAccountScreen}
        />
        <MyAccountStackNavigator.Screen
          name="MovieDetails"
          options={{headerTitle: ''}}
          component={MovieDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="MovieReviewList"
          component={MovieReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="ReviewBreakdown"
          options={{title: 'Review breakdown'}}
          component={ReviewBreakdownScreen}
        />
        <MyAccountStackNavigator.Screen
          name="CreateReview"
          options={{title: 'Create a review'}}
          component={CreateReviewScreen}
        />
        <MyAccountStackNavigator.Screen
          name="EditReview"
          options={{title: 'Edit review'}}
          component={EditReviewScreen}
        />
        <MyAccountStackNavigator.Screen
          name="ReviewDetails"
          options={{title: 'Review details'}}
          component={ReviewDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserDetails"
          options={{headerTitle: ''}}
          component={UserDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserWatchedList"
          options={{title: 'Watched movies'}}
          component={UserWatchedListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserReviewList"
          options={{title: 'Reviews'}}
          component={UserReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserThankedReviewList"
          options={{title: 'Thanked reviews'}}
          component={UserThankedReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="ManageAccountInfo"
          options={{title: 'Edit account', animation: 'slide_from_right'}}
          component={ManageAccountInfo}
        />
      </MyAccountStackNavigator.Group>
    </MyAccountStackNavigator.Navigator>
  );
}

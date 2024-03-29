export type MainStackParams = {
  MovieDetails: undefined;
  MovieReviewList: {
    firstTab?: 'regular' | 'critic' | 'personal';
  };
  ReviewDetails: undefined;
  ReviewBreakdown: undefined;
  UserDetails: undefined;
  UserWatchedList: {isPersonal?: boolean};
  UserReviewList: {isPersonal?: boolean};
  UserThankedReviewList: {isPersonal?: boolean};
  CreateReview: undefined;
  EditReview: undefined;
};

import React, {useContext} from 'react';
import {LikeButton} from '../../../Buttons/LikeButton';
import {graphql} from 'relay-runtime';
import {ReviewLikeButton$key} from './__generated__/ReviewLikeButton.graphql';
import {useFragment, useMutation} from 'react-relay';
import type {ReviewLikeButtonMutation as ReviewLikeButtonMutationType} from './__generated__/ReviewLikeButtonMutation.graphql';
import {PreloadedQueriesContext} from '../../../../relay/PreloadedQueriesContext';

const ReviewLikeButtonFragment = graphql`
  fragment ReviewLikeButton on Review {
    id
    author {
      id
    }
    thankCount
    isThankedByViewer
  }
`;

const ReviewLikeButtonMutation = graphql`
  mutation ReviewLikeButtonMutation($id: ID!, $thank: Boolean!)
  @raw_response_type {
    thankReview(reviewId: $id, thank: $thank) {
      ... on MutationThankReviewSuccess {
        data {
          isThankedByViewer
          thankCount
        }
      }
    }
  }
`;

export interface ReviewLikeButtonProps {
  review: ReviewLikeButton$key | null;
}

export function ReviewLikeButton({review}: ReviewLikeButtonProps): JSX.Element {
  const data = useFragment(ReviewLikeButtonFragment, review);
  const [commitMutation] = useMutation<ReviewLikeButtonMutationType>(
    ReviewLikeButtonMutation,
  );
  const preloadedQueries = useContext(PreloadedQueriesContext);

  function onLike() {
    if (!data) {
      return;
    }

    commitMutation({
      variables: {id: data?.id, thank: !data.isThankedByViewer},
      optimisticResponse: {
        thankReview: {
          __typename: 'MutationThankReviewSuccess',
          data: {
            id: data.id,
            isThankedByViewer: !data.isThankedByViewer,
            thankCount: data.thankCount + (data.isThankedByViewer ? -1 : 1),
          },
        },
      },
      onCompleted: () => {
        preloadedQueries?.MyAccount.loadQuery(
          {},
          {fetchPolicy: 'network-only'},
        );
        preloadedQueries?.UserThankedReviewList.loadQuery(
          {id: data.author.id},
          {fetchPolicy: 'network-only'},
        );
      },
    });
  }

  return (
    <LikeButton
      onPress={onLike}
      isActive={data?.isThankedByViewer}
      count={data?.thankCount}
    />
  );
}

/**
 * @generated SignedSource<<8729ff7e03deb707a5764ae03f10c338>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AllUserReviewList$data = {
  readonly id: string;
  readonly reviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "AllUserReviewList";
};
export type AllUserReviewList$key = {
  readonly " $data"?: AllUserReviewList$data;
  readonly " $fragmentSpreads": FragmentRefs<"AllUserReviewList">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "reviews"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./AllUserReviewListRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "AllUserReviewList",
  "selections": [
    {
      "alias": "reviews",
      "args": null,
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "__AllUserReviewListFragment_reviews_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ReviewEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Review",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ReviewListItem"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "4236557044868466450998347e9df022";

export default node;

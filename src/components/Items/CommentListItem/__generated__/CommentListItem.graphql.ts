/**
 * @generated SignedSource<<84227c48bfbc3f922789ff9c976e316f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentListItem$data = {
  readonly author: {
    readonly avatarUrl: string | null;
    readonly name: string;
  };
  readonly postTime: any;
  readonly " $fragmentSpreads": FragmentRefs<"CommentContent" | "CommentEditor">;
  readonly " $fragmentType": "CommentListItem";
};
export type CommentListItem$key = {
  readonly " $data"?: CommentListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postTime",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentContent"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentEditor"
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "65252e1dc0ebb92dac60f909e687ebdf";

export default node;

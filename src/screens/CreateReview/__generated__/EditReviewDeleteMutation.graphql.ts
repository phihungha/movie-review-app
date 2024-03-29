/**
 * @generated SignedSource<<88015a64432ea2f30eb7dd9f6897b2dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditReviewDeleteMutation$variables = {
  id: string;
};
export type EditReviewDeleteMutation$data = {
  readonly deleteReview: {
    readonly data?: {
      readonly id: string;
      readonly movie: {
        readonly " $fragmentSpreads": FragmentRefs<"AgeScoreChart" | "CriticAggregateScoreIndicator" | "GenderScoreChart" | "RegularAggregateScoreIndicator" | "ScoreCountChart">;
      };
    };
  };
};
export type EditReviewDeleteMutation = {
  response: EditReviewDeleteMutation$data;
  variables: EditReviewDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "authorType",
  "value": "Regular"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditReviewDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteReview",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "movie",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CriticAggregateScoreIndicator"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "RegularAggregateScoreIndicator"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ScoreCountChart"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "GenderScoreChart"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "AgeScoreChart"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationDeleteReviewSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditReviewDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "deleteReview",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "movie",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "criticScore",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "criticReviewCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "regularScore",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "regularReviewCount",
                        "storageKey": null
                      },
                      {
                        "alias": "score0count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 0
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:0)"
                      },
                      {
                        "alias": "score1count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 1
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:1)"
                      },
                      {
                        "alias": "score2count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 2
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:2)"
                      },
                      {
                        "alias": "score3count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 3
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:3)"
                      },
                      {
                        "alias": "score4count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 4
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:4)"
                      },
                      {
                        "alias": "score5count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 5
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:5)"
                      },
                      {
                        "alias": "score6count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 6
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:6)"
                      },
                      {
                        "alias": "score7count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 7
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:7)"
                      },
                      {
                        "alias": "score8count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 8
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:8)"
                      },
                      {
                        "alias": "score9count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 9
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:9)"
                      },
                      {
                        "alias": "score10count",
                        "args": [
                          (v3/*: any*/),
                          {
                            "kind": "Literal",
                            "name": "score",
                            "value": 10
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "numberOfReviewsPerScore",
                        "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:10)"
                      },
                      {
                        "alias": "maleScore",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "gender",
                            "value": "Male"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(gender:\"Male\")"
                      },
                      {
                        "alias": "femaleScore",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "gender",
                            "value": "Female"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(gender:\"Female\")"
                      },
                      {
                        "alias": "otherScore",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "gender",
                            "value": "Other"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(gender:\"Other\")"
                      },
                      {
                        "alias": "age14to20score",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "maxAge",
                            "value": 20
                          },
                          {
                            "kind": "Literal",
                            "name": "minAge",
                            "value": 14
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(maxAge:20,minAge:14)"
                      },
                      {
                        "alias": "age21to30score",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "maxAge",
                            "value": 30
                          },
                          {
                            "kind": "Literal",
                            "name": "minAge",
                            "value": 21
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(maxAge:30,minAge:21)"
                      },
                      {
                        "alias": "age31to50score",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "maxAge",
                            "value": 50
                          },
                          {
                            "kind": "Literal",
                            "name": "minAge",
                            "value": 31
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(maxAge:50,minAge:31)"
                      },
                      {
                        "alias": "age51score",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "minAge",
                            "value": 51
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "regularScoreByCriteria",
                        "storageKey": "regularScoreByCriteria(minAge:51)"
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationDeleteReviewSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7738382d9bb4fadc9dac44c7aad082b9",
    "id": null,
    "metadata": {},
    "name": "EditReviewDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation EditReviewDeleteMutation(\n  $id: ID!\n) {\n  deleteReview(id: $id) {\n    __typename\n    ... on MutationDeleteReviewSuccess {\n      data {\n        id\n        movie {\n          ...CriticAggregateScoreIndicator\n          ...RegularAggregateScoreIndicator\n          ...ScoreCountChart\n          ...GenderScoreChart\n          ...AgeScoreChart\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment AgeScoreChart on Movie {\n  age14to20score: regularScoreByCriteria(minAge: 14, maxAge: 20)\n  age21to30score: regularScoreByCriteria(minAge: 21, maxAge: 30)\n  age31to50score: regularScoreByCriteria(minAge: 31, maxAge: 50)\n  age51score: regularScoreByCriteria(minAge: 51)\n}\n\nfragment CriticAggregateScoreIndicator on Movie {\n  criticScore\n  criticReviewCount\n}\n\nfragment GenderScoreChart on Movie {\n  maleScore: regularScoreByCriteria(gender: Male)\n  femaleScore: regularScoreByCriteria(gender: Female)\n  otherScore: regularScoreByCriteria(gender: Other)\n}\n\nfragment RegularAggregateScoreIndicator on Movie {\n  regularScore\n  regularReviewCount\n}\n\nfragment ScoreCountChart on Movie {\n  score0count: numberOfReviewsPerScore(authorType: Regular, score: 0)\n  score1count: numberOfReviewsPerScore(authorType: Regular, score: 1)\n  score2count: numberOfReviewsPerScore(authorType: Regular, score: 2)\n  score3count: numberOfReviewsPerScore(authorType: Regular, score: 3)\n  score4count: numberOfReviewsPerScore(authorType: Regular, score: 4)\n  score5count: numberOfReviewsPerScore(authorType: Regular, score: 5)\n  score6count: numberOfReviewsPerScore(authorType: Regular, score: 6)\n  score7count: numberOfReviewsPerScore(authorType: Regular, score: 7)\n  score8count: numberOfReviewsPerScore(authorType: Regular, score: 8)\n  score9count: numberOfReviewsPerScore(authorType: Regular, score: 9)\n  score10count: numberOfReviewsPerScore(authorType: Regular, score: 10)\n}\n"
  }
};
})();

(node as any).hash = "d7c3d775e40b99e31a18ed71380c6a9d";

export default node;

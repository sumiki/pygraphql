/**
 * @flow
 * @relayHash 8a745da96ef92a47c5698311c47b7338
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserMutationInput = {
  clientMutationId?: ?string,
  email: string,
  id: string,
  name: string,
};
export type UpdateUserMutationVariables = {|
  input: UpdateUserMutationInput
|};
export type UpdateUserMutationResponse = {|
  +updateUserMutation: ?{|
    +user: ?{|
      +id: string,
      +name: string,
      +email: string,
    |}
  |}
|};
*/


/*
mutation UpdateUserMutation(
  $input: UpdateUserMutationInput!
) {
  updateUserMutation(input: $input) {
    user {
      id
      name
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateUserMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUserMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateUserMutationInput!"
      }
    ],
    "concreteType": "UpdateUserMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateUserMutation",
  "id": null,
  "text": "mutation UpdateUserMutation(\n  $input: UpdateUserMutationInput!\n) {\n  updateUserMutation(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c03c1c6f8dae25b7bd186d209d2e8bcd';
module.exports = node;

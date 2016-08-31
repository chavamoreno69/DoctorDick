'use strict';

export type RecommendationCode =
| "testRec"
| "referCare"
| "followupRec"
| "contactDoc"
| false;

export type Action =
  { type: 'PUSH_NEW_ROUTE', route: string }
    | { type: 'POP_ROUTE' }
    | { type: 'POP_TO_ROUTE', route: string }
    | { type: 'REPLACE_ROUTE', route: string }
    | { type: 'REPLACE_OR_PUSH_ROUTE', route: string }
    | { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'REACH_DECISION', decision: RecommendationCode, questionnaireType: string}

export type Dispatch = (action:Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch:Dispatch, getState:GetState) => any;
export type PromiseAction = Promise<Action>;

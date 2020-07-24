import { ActionTypes } from '../ActionTypes';

export const TestAction = (data) => {
    return ({
        type: ActionTypes.TEST_ACTION,
        payload: data
    });
}

export const TestActionSuccess = (data) => {
    return ({
        type: ActionTypes.TEST_ACTION_SUCCESS,
        payload: data
    });
}
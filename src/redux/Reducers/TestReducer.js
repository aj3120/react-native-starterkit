import { ActionTypes } from '../ActionTypes';

const initial_state = {
    test: null,
    test_data: 'no data'
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case ActionTypes.TEST_ACTION:
            return ({ ...state, test: 'ok' });
            
        case ActionTypes.TEST_ACTION_SUCCESS:
            return ({ ...state, test_data: action.payload });
            
        default:
            return state;
    }
}
import { combineReducers } from 'redux';

import TestReducer from './Reducers/TestReducer';

export default () => combineReducers({
    testReducer: TestReducer
});
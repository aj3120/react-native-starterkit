import { put, takeLatest, call } from 'redux-saga/effects';

import { ActionTypes } from '../ActionTypes';
import { testService } from '../../services/TestService';

export function* loadInitialData(data) {
  const result = yield call(testService, data.payload);
  yield put({ type: ActionTypes.TEST_ACTION_SUCCESS, payload: result });

}

export function* sagaInitialLoad() {
  yield takeLatest(ActionTypes.TEST_ACTION, loadInitialData);
}

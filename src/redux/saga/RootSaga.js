import { all } from 'redux-saga/effects';

import { sagaInitialLoad } from './SagaInitialLoad';

export function* watchAll() {
  yield all([
    sagaInitialLoad()
  ]);
}
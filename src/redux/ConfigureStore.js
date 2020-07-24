import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import createRootReducer from './CombineReducers';
import { watchAll } from './saga/RootSaga';
 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'testReducer',
  ],
}

const persistedReducer = persistReducer(persistConfig, createRootReducer())

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    const store = createStore(
        persistedReducer, // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware// ... other middlewares ...
            ),
        ),
    )
    
    const persistor = persistStore(store)
    
    sagaMiddleware.run(watchAll);
    
    return {store, persistor};
}
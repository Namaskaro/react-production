import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { configureStore } from '@reduxjs/toolkit';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}

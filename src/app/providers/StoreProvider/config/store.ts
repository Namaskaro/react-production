import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}

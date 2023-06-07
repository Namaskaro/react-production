import { StateSchema } from 'app/providers/StoreProvider';
import { counterReducer, counterActions } from './counterSlice';
import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterState';

describe('counterSlice test', () => {
  test('decrement value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
  test('increment value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });
  test('should work with empty state', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});

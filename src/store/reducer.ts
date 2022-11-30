import { combineReducers } from '@reduxjs/toolkit';
import {
  reducer as todoReducer,
  ENTITY_KEY as TODO_ENTITY_KEY,
} from './entities/todo.entity';

export const rootReducer = combineReducers({
  [TODO_ENTITY_KEY]: todoReducer,
});

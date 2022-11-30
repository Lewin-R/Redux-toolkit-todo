import { createSelector } from '@reduxjs/toolkit';
import { selectors } from '../entities/todo.entity';
import { RootState } from '../store';

const stateSelector = (state: RootState) => state.todo;

/*Create a selector to select all Todos*/
export const selectAllTodos = createSelector(stateSelector, (applications) =>
  selectors.selectAll(applications)
);

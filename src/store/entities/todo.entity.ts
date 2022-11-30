import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "../../TodoModel";

export const ENTITY_KEY = "todo";

const todoAdapter = createEntityAdapter<TodoModel>({
  selectId: (entity) => entity.title,
});

export const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: ENTITY_KEY,
  initialState,
  reducers: {
    /*add reducers that fit*/
    addOneTodo: todoAdapter.addOne,
    removeOneTodo: todoAdapter.removeOne,
    updateOneTodo: todoAdapter.updateOne,
  },
});

export const { reducer, actions } = todoSlice;

/*finally, add your actions, you defined, here! */
export const { addOneTodo, removeOneTodo, updateOneTodo } = actions;

export const selectors = todoAdapter.getSelectors();

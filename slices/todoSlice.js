import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		list: []
	},
	reducers: {
		addToTheList: (state, action) => {
			const addItem = { id: uuid(), title: action.payload.toUpperCase() };
			state.list = [ ...state.list, addItem ];
		},
		removeFromTheList: (state, action) => {
			const removeItem = state.list.filter((item) => item.id !== action.payload);
      state.list = removeItem;
    }
	}
});

// Action creators are generated for each case reducer function
export const { addToTheList, removeFromTheList } = todoSlice.actions;
export const todos = (state) => state.todo.list;

export default todoSlice.reducer;

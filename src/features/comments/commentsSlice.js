import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

/*
When using createSlice(), you need to pass an object that defines the initial state, the reducers, and the slice name. Here's what you need to pass to createSlice():

initialState:
This is the initial state of the slice of the Redux store that the createSlice() will manage. It's a plain JavaScript object that represents the initial data for this slice.

reducers:
An object where each property is a reducer function. These reducer functions define how the state should change in response to different actions. The keys of the object will be used as the action type strings.

sliceName:
A string that represents the name of the slice. It's used to automatically generate action type strings based on the slice name.
*/

const initialState = {
	commentsArray: COMMENTS,
};

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		addComment: (state, action) => {
			// console.log('🚀 ~ file: commentsSlice.js:12 ~ action:', action);
			// console.log('🚀 ~ file: commentsSlice.js:12 ~ state:', state.commentsArray);
			const newComment = {
				id: state.commentsArray.length + 1,
				...action.payload,
			};
			state.commentsArray.push(newComment);
		},
	},
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
	return state.comments.commentsArray.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};

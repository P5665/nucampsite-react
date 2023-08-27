import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

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
	campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
	name: 'campsites',
	initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

// Selector functions - state.campsites (store.js) .campsitesArray (initialState)
export const selectAllCampsites = (state) => {
	return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
	return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
	return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

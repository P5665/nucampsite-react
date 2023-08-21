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
	campsiteArray: CAMPSITES,
};

const campsitesSlice = createSlice({
	name: 'campsites',
	initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
	return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

export const selectCampsiteById = (id) => {
	return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
	return CAMPSITES.find((campsite) => campsite.featured);
};

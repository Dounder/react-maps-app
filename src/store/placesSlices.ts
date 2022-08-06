import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number, number];
}

export const placesSlices = createSlice<PlacesState, SliceCaseReducers<PlacesState>>({
	name: "places",
	initialState: {
		isLoading: true,
		userLocation: undefined,
	},
	reducers: {
		setUserLocation: (state, { payload }: { payload: [number, number] }) => {
			state.userLocation = payload;
			state.isLoading = false;
		},
	},
});

export const { setUserLocation } = placesSlices.actions;

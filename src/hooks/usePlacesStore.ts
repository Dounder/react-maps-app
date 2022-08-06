import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, PlacesState, RootState, setUserLocation } from "../store";
import { getUserLocation } from "../helpers/getUserLocation";

export const usePlacesStore = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading, userLocation } = useSelector<RootState, PlacesState>((state) => state.places);

	useEffect(() => {
		getUserLocation().then((coords) => {
			dispatch(setUserLocation(coords));
		});
	}, []);

	return {
		//? Properties
		isLoading,
		userLocation,
	};
};

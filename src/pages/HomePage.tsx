import { usePlacesStore } from "../hooks/usePlacesStore";
export const HomePage = () => {
	const { isLoading, userLocation } = usePlacesStore();

	return (
		<>
			<h1>HomePage</h1>
		</>
	);
};

export const getUserLocation = async (): Promise<[number, number]> =>
	new Promise((res, req) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				res([coords.longitude, coords.latitude]);
			},
			(err) => {
				alert("Could not get your location. Please try again.");
				console.log(err);
				req();
			}
		);
	});

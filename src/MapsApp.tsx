import { Provider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages";

export const App = () => {
	return (
		<>
			<Provider store={store}>
				<HomePage />
			</Provider>
		</>
	);
};

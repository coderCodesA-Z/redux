export const captureState = (createStore) => {
	return (rootReducer, initialState, enhancers) => {
		const captureReducer = (state, action) => {
			console.log("<<< LOGGING >>>");
			console.log("OLD STATE : ", state);
			console.log(
				"ACTION : ",
				action.type.startsWith("@@redux/INIT")
					? (action.type = "@@INIT")
					: action
			);

			const newState = rootReducer(state, action);

			console.log("NEW STATE : ", newState);

			return newState;
		};

		return createStore(captureReducer, initialState, enhancers);
	};
};

export const logStateAndPerformance = (createStore) => {
	return (rootReducer, initialState, enhancers) => {
		const logReducer = (state = initialState, action) => {
			console.log("<<< LOGGING >>>");
			console.log("OLD STATE : ", state);

			console.log(
				"ACTION : ",
				action.type.startsWith("@@redux/INIT")
					? (action.type = "@@INIT")
					: action.type
			);

			const start = performance.now();
			const newState = rootReducer(state, action);
			const end = performance.now();
			const diff = end - start;

			console.log("NEW STATE : ", newState);

			console.log("TIME TO REDUCER : ", diff, "\n");

			return newState;
		};

		return createStore(logReducer, initialState, enhancers); // modifies the dispatch()
	};
};

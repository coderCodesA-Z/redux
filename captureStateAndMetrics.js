export const captureStateAndMetrics = (createStore) => {
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

			const start = performance.now();
			const newState = rootReducer(state, action);
			const end = performance.now();
			const diff = end - start;

			console.log("NEW STATE : ", newState);
      console.log("PERFORMANCE OF REDUCER : ", diff, "ms\n");

      return newState;
		};

		return createStore(captureReducer, initialState, enhancers);
	};
};

export const capturePerformance = (createStore) => {
	return (rootReducer, initialState, enhancers) => { // enhancer is passed through the enhancer again to memoize
		const captureReducer = (state, action) => {
			const start = performance.now();
			const newState = rootReducer(state, action);
			const end = performance.now();

			const diff = end - start;
			console.log("PERFORMANCE OF REDUCER : ", diff, "ms\n");

			return newState;
		};

		return createStore(captureReducer, initialState, enhancers);
	};
};

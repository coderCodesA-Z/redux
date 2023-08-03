import { legacy_createStore as createStore } from "redux";
import { captureStateAndMetrics } from "./captureStateAndMetrics.js";

const initialState = { num: 1 };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, num: state.num + 1 };
		case "DECREMENT":
			return { ...state, num: state.num - 1 };
		default:
			return state;
	}
};

// enhancer : https://speakerdeck.com/stevekinney/redux-workshop-2021-05-05?slide=8
// enhancers are used to customize the creation of the store
// logStateAndPerformance enhancer
const store = createStore(rootReducer, captureStateAndMetrics);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
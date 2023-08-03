import { compose, legacy_createStore as createStore } from "redux";
import { capturePerformance, captureState } from "./enhancers/index.js";

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

// enhancers change the overall implementation of the store
// middlewares : modifying actions, logging, async calls, etc.

const store = createStore(
	rootReducer,
	compose(captureState, capturePerformance)
);
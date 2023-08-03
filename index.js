import { legacy_createStore as createStore } from "redux";

const INCREMENT_BY_1 = "INCREMENT_BY_1";
const DECREMENT_BY_1 = "DECREMENT_BY_1";
const INCREMENT_BY_VAL = "INCREMENT_BY_VAL";
const DECREMENT_BY_VAL = "DECREMENT_BY_VAL";

const reducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case INCREMENT_BY_1:
			return { count: state.count + 1 }; // state is not mutated, return new state every time
		case DECREMENT_BY_1:
			return { count: state.count - 1 };
		case INCREMENT_BY_VAL:
			return { count: state.count + action.payload };
		case DECREMENT_BY_VAL:
			return { count: state.count - action.payload };
		default:
			return state;
	}
};

const incrementBy1Action = () => ({ type: INCREMENT_BY_1 });
const incrementByValAction = (payload) => ({ type: INCREMENT_BY_VAL, payload });
const decrementBy1Action = () => ({ type: DECREMENT_BY_1 });
const decrementByValAction = (payload) => ({ type: DECREMENT_BY_VAL, payload });

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(incrementBy1Action());
console.log(store.getState());

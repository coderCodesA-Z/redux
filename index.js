import { legacy_createStore as createStore } from "redux";

const initialState = {
	users: [
		{ id: 1, name: "Mark" },
		{ id: 2, name: "Rob" },
	],
	tasks: [
		{
			title: "Buy More Energy Drinks",
		},
		{
			title: "Cycle for 45min",
		},
	],
};

// if the state gets complex and we keep on adding to the same reducer, the reducer will start to become messy
// TIME TO REFACTOR
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return {
				...state,
				users: [...state.users, action.payload],
			};
		case "ADD_TASK":
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		default:
			return state;
	}
}

const store = createStore(reducer);
// multiple stores is an anti pattern. There should be one store which acts as provider

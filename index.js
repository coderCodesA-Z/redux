import { bindActionCreators, combineReducers, legacy_createStore as createStore } from "redux";

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

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
});
const addTask = (task) => ({
	type: ADD_TASK,
	payload: task,
});

const userReducer = (state = initialState.users, action) => {
	switch (action.type) {
		case "ADD_USER":
			return [...state, action.payload];
		default:
			return state;
	}
};

const taskReducer = (state = initialState.tasks, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...state, action.payload];
		default:
			return state;
	}
};

const reducer = combineReducers({ user: userReducer, task: taskReducer });
const store = createStore(reducer);

const action = bindActionCreators({ addUser, addTask }, store.dispatch);
console.log(store.getState());
action.addUser({ id: 3, name: "John" });
action.addTask({ title: "Swim for 15min" });
console.log(store.getState());

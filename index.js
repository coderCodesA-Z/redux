import { legacy_createStore as createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState()); // getState() returns the current state of the store
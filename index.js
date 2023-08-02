import { legacy_createStore as createStore } from "redux";

// reducer is a pure function that takes in the current state and an action and returns the next state
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
// reducer : https://speakerdeck.com/stevekinney/redux-workshop-2021-05-05?slide=3

const store = createStore(reducer);
console.log(store);
/**
  {
    dispatch: [Function: dispatch],
    subscribe: [Function: subscribe],
    getState: [Function: getState],
    replaceReducer: [Function: replaceReducer], -> replaces one reducer with other: used for code splitting
    '@@observable': [Function: observable]
  }
 */
import { compose, bindActionCreators, createStore, applyMiddleware  } from "redux";

const makeLouder = (str) => str.toUpperCase();
const repeatThreeTimes = (str) => str.repeat(3);
const embolden = (str) => str.bold();

// const makeLouderRepeatThreeTimesAndEmbolden = (str) =>
// 	embolden(repeatThreeTimes(makeLouder(str)));

const makeLouderRepeatThreeTimesAndEmbolden = compose(
	embolden,
	repeatThreeTimes,
	makeLouder,
);

console.log(makeLouderRepeatThreeTimesAndEmbolden("Hello"));

// compose()

"use strict";

const buttonDiv = document.getElementById('filters');
const data = require('./data.js');
const printToDom = require('./dom.js');

const filterEvent = () => {
	buttonDiv.addEventListener('click', (event) => {
		let itemToFilterOn = event.target.id;
		const gifArray = data.getGifs();
		const filteredArray = filterArray(itemToFilterOn, gifArray);
		console.log({filteredArray});
		printToDom(filteredArray);
	});
};

const filterArray = (filterOn, originalArray) => {
	const finalArray = [];
	originalArray.forEach((item) => {
		if (item.categoryDataName === filterOn) {
			finalArray.push(item);
		}
	});
	return finalArray;
};

const activateEvents = { // E6 notation: key is filterEvent and the value is fxn filterEvent()
	filterEvent
};

module.exports = activateEvents;
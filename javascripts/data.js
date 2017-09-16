"use strict";

const printToDom = require('./dom.js');
const loadGifs = require('./gifs.js');
const loadCategories = require('./categories.js');

let gifArray = [];

const errorFunction = () => {
	console.log("You broke it.  Thanks.");
};

// When Gif Loads
const whenGifsLoad = function() {
	gifArray = JSON.parse(this.responseText).gifs;
	//Load categories
	loadCategories(whenCategoriesLoad,errorFunction);
};

const whenCategoriesLoad = function() {
	let categoryArray = JSON.parse(this.responseText).categories;
	// Combines arrays
	combineArrays(categoryArray);

};

const combineArrays = (categories) => {
	categories.forEach((category) => { 
		gifArray.forEach((gif) => {
			if (gif.category === category.id) {
				gif.categoryName = category.name;
				gif.categoryDataName = category.dataName;
			}
		});
	});
	// call print to DOM
	printToDom(gifArray);
};

// set up 'initializer' - load gifs
const initializer = () => {
	loadGifs(whenGifsLoad, errorFunction);
};

module.exports = initializer;
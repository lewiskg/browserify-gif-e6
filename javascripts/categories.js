"use strict";

const loadCategories = (onCategoryLoad, onCategoryError) => { // pass fxns for load and error
	const categoryLoader = new XMLHttpRequest();
	categoryLoader.addEventListener('error',onCategoryError);
	categoryLoader.addEventListener('load',onCategoryLoad);
	categoryLoader.open('GET', '../data/categories.json');
	categoryLoader.send();
};

module.exports = loadCategories;
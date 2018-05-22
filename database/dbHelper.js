const db = require('./db.js');

const getItems = function (criteria, cb) {
	db.itemModel.find(criteria).exec(cb);
};

const getCategories = function (criteria, cb) {
	db.itemModel.distinct(criteria).exec(cb);
};

const getActivities = function (criteria, cb) {
	db.itemModel.distinct(criteria).exec(cb);
};

module.exports.getItems = getItems;
module.exports.getCategories = getCategories;
module.exports.getActivities = getActivities;
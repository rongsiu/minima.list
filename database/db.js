const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = `mongodb://localhost/minimaling`;

mongoose.connect(mongoUri);

const itemSchema = new mongoose.Schema({
	item: String,
	category: String,
	activities: String,
	photo_id: String,
	photo_url: String,
	status: String,
	date_acquired: Date, 
	date_removed: Date,
});

const Item = mongoose.model('Item', itemSchema);

module.exports.itemModel = Item;

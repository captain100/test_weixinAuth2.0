var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var test_Schema = new Schema({
	title:String,
	body:String,
	comments:[{body:String,date:Date}],
	username:String,
	date:{type:Date,default:Date.now},
	meta:{
		fans:Number,
		votes:Number
	}
});

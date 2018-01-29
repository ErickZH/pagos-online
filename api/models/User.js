/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

let bcrypt = require('bcrypt-as-promised');

module.exports = {

	attributes: {
		email: {
			type: 'string',
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		}
  	},
  	beforeCreate: function(user, callback) {
  		bcrypt.hash(user.password, 10)
  			  .then(function(hash) {
  			  	user.password = hash;
  			  	callback();
  			})
  			.catch(function(err) {
  				console.log(err);
  				callback(err);
  			})
  	}
};


/**
 * RegistrationsController
 *
 * @description :: Server-side logic for managing Registrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	show: function(req, res) 
	{
		res.view('registrations/show');
	},
	create: function(req, res) 
	{
		
	}
	
};


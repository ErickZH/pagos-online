/**
 * BookController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res)
	{
		Book.find({
			limit: 20,
			sort: "createdAt DESC"
		}).exec(function(err, docs){
			return res.view('books/index', {books: docs});
		});

	}
};

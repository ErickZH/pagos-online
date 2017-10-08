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
	},
	findOne: function(req, res)
	{
		Book.findOne({id: req.params.id}).exec(function(err, book)
		{
			if (err) console.log(err);
			return res.view('books/show', {book: book});
		});
	},
	new: function(req, res)
	{
		return res.view('books/new');
	},
	edit: function(req, res)
	{
		Book.findOne({id: req.params.id}).exec(function(err, book)
		{
			if (err) console.log(err);
			return res.view('books/edit', {book: book});
		});
	}
};

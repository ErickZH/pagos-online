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
	create: function(req, res)
	{
		req.file('avatar').upload({
			dirname: '../../assets/images/books/avatars'
		}, function(err, files)
		{
			if (err) res.negotiate(err);

			var options = {
				title: req.body.title,
				description: req.body.description,
				pages: req.body.pages,
				publishedAt: req.body.publishedAt,
			};

			if (files.length > 0)
			{
				options['avatarUrl'] = files[0].fd.split("/").pop();
			}

			Book.create(options, function(err, newBook){
				res.redirect('/book/'+newBook.id);
			});
		})
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
	},
	delete: function(req, res)
	{
		Book.findOne({id: req.params.id}).exec(function(err, book)
		{
			if (err) console.log(err);
			return res.view('books/delete', {book: book});
		});
	},
	destroy: function(req, res)
	{
		Book.destroy({id: req.params.id}).exec(function(err){
			return res.redirect("/book");
		});
	}
};

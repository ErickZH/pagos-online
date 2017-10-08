
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  '/book/:id/edit': 'BookController.edit',
  '/book/:id/delete': 'BookController.delete'
};

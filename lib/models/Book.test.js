const Book = require('./Book');

describe('Book Model', () => {
  describe('name', () => {
    it('requires a title', () => {
      const book = new Book({
        author: 'tmo money',
        pages: 3
      });
  
      const { errors } = book.validateSync();
      expect(errors.title.message).toEqual('Path `title` is required.');
    });
    it('requires an author', () => {
      const book = new Book({
        title: 'Mt. Hood',
        pages: 2
      });
      const { errors } = book.validateSync();
      expect(errors.author.message).toEqual('Path `author` is required.');
    });
    it('pages is required', () => {
      const book = new Book({
        title: 'Mt. Hood',
        author: 'Tmo Money',
      });
      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` is required.');
    });
    it('has enough pages to be a book', () => {
      const book = new Book({
        title: 'Mt. Hood',
        author: 'Tmo Money',
        pages: 1
      });
      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` (1) is less than minimum allowed value (2).');
    });
  });
});

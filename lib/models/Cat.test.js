const Cat = require('./Cat');

describe('Cat Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const cat = new Cat({
        age: 3,
        weight: '5 lbs'
      });
  
      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
});

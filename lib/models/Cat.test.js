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
    it('requires an age', () => {
      const cat = new Cat({
        name: 'tmo',
        weight: '5 lbs'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` is required.');
    });
    it('age is too old', () => {
      const cat = new Cat({
        name: 'tmo',
        age: 26,
        weight: '20 lbs'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` (26) is more than maximum allowed value (25).');
    });
  });
});

const Person = require('./Person');

describe('Person Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const person = new Person({
        age: 28,
        legs: 2
      });
  
      const { errors } = person.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
    it('requires an age', () => {
      const person = new Person({
        name: 'Travis',
        legs: 2
      });
      const { errors } = person.validateSync();
      expect(errors.age.message).toEqual('Path `age` is required.');
    });
    it('age is too low', () => {
      const person = new Person({
        name: 'Tmo',
        age: -28,
        legs: 2
      });
      const { errors } = person.validateSync();
      expect(errors.age.message).toEqual('Path `age` (-28) is less than minimum allowed value (0).');
    });
    it('too many legs to be a human, cyborg?', () => {
      const person = new Person({
        name: 'Tmo',
        age: 28,
        legs: 4
      });
      const { errors } = person.validateSync();
      expect(errors.legs.message).toEqual('Path `legs` (4) is more than maximum allowed value (2).');
    });
  });
});

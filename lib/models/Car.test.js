const Car = require('./Car');

describe('Car Model', () => {
  describe('name', () => {
    it('requires a model', () => {
      const car = new Car({
        year: 1990,
        hasMotor: true
      });
  
      const { errors } = car.validateSync();
      expect(errors.model.message).toEqual('Path `model` is required.');
    });
    it('requires an year', () => {
      const car = new Car({
        model: 'Tesla',
        hasMotor: false
      });
      const { errors } = car.validateSync();
      expect(errors.year.message).toEqual('Path `year` is required.');
    });
    it('year is too new', () => {
      const car = new Car({
        model: 'Tesla',
        year: 2050,
        hasMotor: false
      });
      const { errors } = car.validateSync();
      expect(errors.year.message).toEqual('Path `year` (2050) is more than maximum allowed value (2022).');
    });
    it('year is too old', () => {
      const car = new Car({
        model: 'Tesla',
        year: 200,
        hasMotor: false
      });
      const { errors } = car.validateSync();
      expect(errors.year.message).toEqual('Path `year` (200) is less than minimum allowed value (1900).');
    });
  });
});

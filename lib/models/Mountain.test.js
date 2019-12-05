const Mountain = require('./Mountain');

describe('Mountain Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const mountain = new Mountain({
        height: 1990,
        isActive: true
      });
  
      const { errors } = mountain.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
    it('requires an year', () => {
      const mountain = new Mountain({
        name: 'Mt. Hood',
        isActive: true
      });
      const { errors } = mountain.validateSync();
      expect(errors.height.message).toEqual('Path `height` is required.');
    });
    it('height is too short', () => {
      const mountain = new Mountain({
        name: 'Mt. Hood',
        height: -2050,
        isActive: false
      });
      const { errors } = mountain.validateSync();
      expect(errors.height.message).toEqual('Path `height` (-2050) is less than minimum allowed value (0).');
    });
    it('height is too tall', () => {
      const mountain = new Mountain({
        name: 'Mt. Hood',
        height: 300000,
        isActive: true
      });
      const { errors } = mountain.validateSync();
      expect(errors.height.message).toEqual('Path `height` (300000) is more than maximum allowed value (29029).');
    });
  });
});

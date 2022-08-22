const app = require('./utils');

describe('Add and subtract total Minutes of exercise', () => {

  it('should add 1 minute to totalMinutes', () => {
    let totalMinutes = 0;
    expect(app.sumMinutes(totalMinutes, 1)).toBe(1);
  });

  it('should subtract 1 minute of totalMinutes', () => {
     let totalMinutes = 1;
     expect(app.subtractMinutes(totalMinutes, 1)).toBe(0); 
  });

  
});
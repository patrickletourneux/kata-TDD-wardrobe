const Wardrobe = require('./Wardrobe');

describe('Wardrobe class', () => {

    const wall = 250
    const instance = new Wardrobe(wall);
    
    beforeEach(() => {
        console.log('beforeEach');
      })

      describe('combinationsOK()', () => {   
        test('combinationsOK return an Array', () => {
          expect(instance.combinationsOK()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
        });
    
      });
      describe('wall()', () => { 
        test('wall() should return wall', () => {
          expect(instance.wallValue()).toEqual(wall);
        });
    
      });
      describe('calculAllCombinations()', () => { 
        test('calculAllCombinations() should return ', () => {
          expect(instance.calculAllCombinations()).toHaveLength(1296);
          expect(instance.calculAllCombinations()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
        });
    
      });
      describe('calculCombinationMatchWall()', () => { 
        test('calculCombinationMatchWall() should return ', () => {
          expect(instance.calculCombinationMatchWall()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
        });
    
      });
})
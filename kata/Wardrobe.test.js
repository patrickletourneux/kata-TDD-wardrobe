const Wardrobe = require('./Wardrobe');

describe('Wardrobe class', () => {

    const wall = 250
    const instance = new Wardrobe(wall);
    
    beforeEach(() => {
        // console.log('beforeEach');
        instance.allCombinations = []
      })

      describe('combinationsOK()', () => {   
        test('combinationsOK return an Array contain [50,50,50,50,50] and [50,100,100] ', () => {
          expect(instance.combinationsOK()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
          expect(instance.combinationsOK()).toEqual(expect.arrayContaining([[50,100,100]]));
        });
    
      });
      describe('wall()', () => { 
        test('wall() should return wall', () => {
          expect(instance.wallValue()).toEqual(wall);
        });
    
      });
      describe('calculAllCombinations()', () => { 
        test('calculAllCombinations() should HaveLength(1296) and contain [50,50,50,50,50]) ', () => {
          expect(instance.calculAllCombinations()).toHaveLength(1296);
          expect(instance.calculAllCombinations()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
        });
    
      });
      describe('sumArray(array)', () => { 
        test('sumArray(array) should return toEqual(300) ', () => {
          expect(instance.sumArray([50,100,150])).toEqual(300);
        });
    
      });
      describe('calculCombinationSumMatchWall()', () => { 
        test('calculCombinationSumMatchWall() should contain [50,50,50,50,50] ', () => {
          instance.calculAllCombinations();
          expect(instance.calculCombinationSumMatchWall()).toEqual(expect.arrayContaining([[50,50,50,50,50]]));
        });
    
      });

})
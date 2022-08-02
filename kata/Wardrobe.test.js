const Wardrobe = require('./Wardrobe');

describe('Wardrobe class', () => {
    
    const instance = new Wardrobe();
    
    beforeEach(() => {
        console.log('beforeEach');
      })

      describe('log()', () => {
    
        test('log() return OK', () => {
          expect(instance.log()).toEqual('OK');
        });
    
    });
})
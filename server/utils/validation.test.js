const expect = require('expect');
const {isRealString} = require('./validation')

  // describe('isRealString', () => {
  //   it('should reject non-string values', () => {
  //     expect(isRealString(8)).toBe(false);
  //     expect(isRealString({name: 'Bob'})).toBe(false);
  //   });
  //   it('should reject string only spaces', () => {
  //     expect(isRealString('     ')).toBe(false);
  //   });
  //   it('should allow string with non-space characters', () => {
  //     expect(isRealString('   LOTR')).toBe(true);
  //   });
  // });

    describe('isRealString', () => {
      it('should reject non-string values', () => {
        var res = isRealString(8)
        var res2 = isRealString({name: 'Bob'})
        expect(res).toBe(false);
        expect(res2).toBe(false);
      });
      it('should reject string only spaces', () => {
        var res = isRealString('     ')
        expect(res).toBe(false);
      });
      it('should allow string with non-space characters', () => {
        var res = isRealString('   LOTR   ')
        expect(res).toBe(true);
      });
    });

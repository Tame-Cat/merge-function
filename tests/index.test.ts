import { merge } from '../src/MergeFunction';

describe('success ',() => {
    test('เรียงเลขจาก 0 - 9', () => {
        const inputA = [2,1,0,4,3]
        const inputB = [7,5,6,9,8]
        expect(merge(inputA,inputB)).toEqual([0,1,2,3,4,5,6,7,8,9]);
    });

    test('เรียงเลขจาก -9 -> 0', () => {
        const inputA = [0,-3,-4,-5,-7]
        const inputB = [-9,-1,-2,-6,-8]
        const result = [-9,-8,-7,-6,-5,-4,-3,-2,-1,0]
        expect(merge(inputA,inputB)).toEqual(result);
    });

    test('เรียงเลขแบบมีเลขซ้ำ 0 -> 9', () => {
        const inputA = [0,2,2,1,4,8]
        const inputB = [6,4,3,9,0]
        const result = [0,0,1,2,2,3,4,4,6,8,9]
        expect(merge(inputA,inputB)).toEqual(result);
    });
    
})

